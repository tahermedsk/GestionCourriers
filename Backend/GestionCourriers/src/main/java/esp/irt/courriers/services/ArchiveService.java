package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import esp.irt.courriers.entites.Archive;
import esp.irt.courriers.repository.ArchiveRepository;

@Service
public class ArchiveService {

    @Autowired
    private ArchiveRepository archiveRepository;

    @Value("${upload.directory}")
    private String uploadDirectory;

    public List<Archive> getAllArchives() {
        return archiveRepository.findAll();
    }

    public Archive getArchiveById(Long id) {
        Optional<Archive> archive = archiveRepository.findById(id);
        return archive.orElse(null);
    }

    public Archive createArchive(Archive archive) {
        return archiveRepository.save(archive);
    }

    public void deleteArchive(Long id) {
        archiveRepository.deleteById(id);
    }

    public Archive uploadFile(MultipartFile file, Date date, String coteFinal, String observations) throws IOException {
        File directory = new File(uploadDirectory);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        String fileName = file.getOriginalFilename();
        String storedFileName = System.currentTimeMillis() + "_" + fileName;
        Path filePath = Paths.get(uploadDirectory + File.separator + storedFileName);
        Files.copy(file.getInputStream(), filePath);
        Archive archive = new Archive();
        archive.setNomFichier(fileName);
        archive.setLienFichier(filePath.toString());
        archive.setDate_trans_dep_inter(date);
        archive.setCote_final(coteFinal);
        archive.setObservations(observations);
        return archiveRepository.save(archive);
    }
}
