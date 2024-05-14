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
        // Concaténer le sous-dossier "Bordereau_de_versement" au chemin du répertoire de téléversement
        String uploadDirectoryWithSubfolder = uploadDirectory;
        
        // Vérifier si le dossier "Bordereau_de_versement" existe, sinon le créer
        File directory = new File(uploadDirectoryWithSubfolder);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Obtenir le nom d'origine du fichier
        String fileName = file.getOriginalFilename();
        
        // Générer un nom unique pour le fichier
        String storedFileName = System.currentTimeMillis() + "_" + fileName;

        // Chemin du fichier dans le dossier "Bordereau_de_versement"
        Path filePath = Paths.get(uploadDirectoryWithSubfolder + File.separator + storedFileName);

        // Enregistrer le fichier dans le dossier "Bordereau_de_versement"
        Files.copy(file.getInputStream(), filePath);

        // Créer l'objet Archive avec les détails
        Archive archive = new Archive();
        archive.setNomFichier(fileName);
        archive.setLienFichier(filePath.toString());
        archive.setDate_trans_dep_inter(date);
        archive.setCote_final(coteFinal);
        archive.setObservations(observations);

        // Enregistrer l'archive dans la base de données
        return archiveRepository.save(archive);
    }
}
