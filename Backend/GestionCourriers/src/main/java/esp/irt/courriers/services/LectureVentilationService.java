package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.LectureVentilation;
import esp.irt.courriers.repository.LectureVentilationRepository;

import java.util.List;

@Service
public class LectureVentilationService {
    @Autowired
    private LectureVentilationRepository lectureVentilationRepository;

    public List<LectureVentilation> getAllLectureVentilations() {
        return lectureVentilationRepository.findAll();
    }

    public LectureVentilation getLectureVentilationById(Long id) {
        return lectureVentilationRepository.findById(id).orElse(null);
    }

    public LectureVentilation saveLectureVentilation(LectureVentilation lectureVentilation) {
        return lectureVentilationRepository.save(lectureVentilation);
    }

    public LectureVentilation updateLectureVentilation(Long id, LectureVentilation lectureVentilation) {
        if (lectureVentilationRepository.existsById(id)) {
            lectureVentilation.setId(id);
            return lectureVentilationRepository.save(lectureVentilation);
        }
        return null;
    }

    public void deleteLectureVentilation(Long id) {
        lectureVentilationRepository.deleteById(id);
    }
}
