package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import esp.irt.courriers.entites.Archive;
import esp.irt.courriers.services.ArchiveService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/archives")
public class ArchiveController {

    @Autowired
    private ArchiveService archiveService;

    @GetMapping
    public List<Archive> getAllArchives() {
        return archiveService.getAllArchives();
    }

    @GetMapping("/{id}")
    public Archive getArchiveById(@PathVariable Long id) {
        return archiveService.getArchiveById(id);
    }

    @PostMapping
    public Archive createArchive(@RequestBody Archive archive) {
        return archiveService.createArchive(archive);
    }

    @DeleteMapping("/{id}")
    public void deleteArchive(@PathVariable Long id) {
        archiveService.deleteArchive(id);
    }

    @PostMapping("/upload")
    public Archive uploadFile(@RequestParam("file") MultipartFile file,
                              @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date,
                              @RequestParam("coteFinal") String coteFinal,
                              @RequestParam("observations") String observations) throws IOException {
        // Le reste du code ici
        Archive archive = archiveService.uploadFile(file, date, coteFinal, observations);
        return archive;
    }
}