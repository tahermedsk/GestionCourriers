package esp.irt.courriers.services;

import esp.irt.courriers.entites.Reponse;
import esp.irt.courriers.repository.ReponseRepository;
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

@Service
public class ReponseService {

    @Autowired
    private ReponseRepository reponseRepository;

    @Value("${upload.directory}")
    private String uploadDirectory;

    public List<Reponse> getAllReponses() {
        return reponseRepository.findAll();
    }

    public Reponse getReponseById(Long id) {
        Optional<Reponse> reponse = reponseRepository.findById(id);
        return reponse.orElse(null);
    }

    public Reponse createReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    public void deleteReponse(Long id) {
        reponseRepository.deleteById(id);
    }

    public Reponse uploadFile(MultipartFile file, Date date, String idReponse, String idCourrier, String observations) throws IOException {
        File directory = new File(uploadDirectory);
        if (!directory.exists()) {
            directory.mkdirs();
        }
        String fileName = file.getOriginalFilename();
        String storedFileName = System.currentTimeMillis() + "_" + fileName;
        Path filePath = Paths.get(uploadDirectory + File.separator + storedFileName);
        Files.copy(file.getInputStream(), filePath);
        Reponse reponse = new Reponse();
        reponse.setNomFichier(fileName);
        reponse.setLienFichier(filePath.toString());
        reponse.setDate(date);
        reponse.setIdReponse(idReponse);
        reponse.setIdCourrier(idCourrier);
        reponse.setObservations(observations);
        return reponseRepository.save(reponse);
    }
}
