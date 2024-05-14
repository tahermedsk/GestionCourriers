package esp.irt.courriers.controller;
import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UploadFile {
    
    @Autowired
    private Environment environment;

    @PostMapping("/api/thumbnail-upload")
    public ResponseEntity<String> uploadThumbnail(
            @RequestParam("thumbnail") MultipartFile file,
            @RequestParam("reference") String reference,
            @RequestParam("dossier") String dossier) {
        // Check if the file is empty
        
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please upload a file");
        }

        // Retrieve the upload directory path from the app.properties file
        String uploadDir = environment.getProperty("app.upload-dir")+"/"+dossier+"/"+reference;
        if (uploadDir == null || uploadDir.isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Upload directory not configured");
        }

        try {
            // Create the upload directory if it does not exist
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Construct the file path with reference appended
            String fileName = file.getOriginalFilename();
            String filePathWithReference = Paths.get(uploadDir, fileName).toString();

            // Save the uploaded file to the constructed path
            Path filePath = Paths.get(filePathWithReference);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            System.out.println("File uploaded successfully: " + filePath.toString());

            return ResponseEntity.status(HttpStatus.CREATED).body("Thumbnail uploaded successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload thumbnail");
        }
    }
}
