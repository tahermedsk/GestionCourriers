

package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import esp.irt.courriers.entites.ReponseFinal;
import esp.irt.courriers.repository.ReponseFinalRepository;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReponseFinalService {

    @Autowired
    private ReponseFinalRepository reponseFinalRepository;

    @Value("${upload.directory}")
    private String uploadDirectory;

    public List<ReponseFinal> getAllReponseFinal() {
        return reponseFinalRepository.findAll();
    }

    public ReponseFinal getReponseFinalById(Long id) {
        Optional<ReponseFinal> reponseFinal = reponseFinalRepository.findById(id);
        return reponseFinal.orElse(null);
    }

    public ReponseFinal createReponseFinal(ReponseFinal reponseFinal) {
        return reponseFinalRepository.save(reponseFinal);
    }

    public void deleteReponseFinal(Long id) {
        reponseFinalRepository.deleteById(id);
    }

    public ReponseFinal uploadFile(MultipartFile file, MultipartFile copieNote, Date date, String idReponse, String idCourrier, String observations) throws IOException {
        File directory = new File(uploadDirectory);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        String fileName = file.getOriginalFilename();
        String storedFileName = System.currentTimeMillis() + "_" + fileName;
        Path filePath = Paths.get(uploadDirectory + File.separator + storedFileName);
        Files.copy(file.getInputStream(), filePath);

        String copieNoteName = copieNote.getOriginalFilename();
        String storedCopieNoteName = System.currentTimeMillis() + "_" + copieNoteName;
        Path copieNotePath = Paths.get(uploadDirectory + File.separator + storedCopieNoteName);
        Files.copy(copieNote.getInputStream(), copieNotePath);

        ReponseFinal reponseFinal = new ReponseFinal();
        reponseFinal.setDate(date);
        reponseFinal.setIdReponse(idReponse);
        reponseFinal.setIdCourrier(idCourrier);
        reponseFinal.setObservations(observations);
        reponseFinal.setNomFichier(fileName);
        reponseFinal.setLienFichier(filePath.toString());
        reponseFinal.setNomCopieNote(copieNoteName);
        reponseFinal.setLienCopieNote(copieNotePath.toString());

        return reponseFinalRepository.save(reponseFinal);
    }
}
