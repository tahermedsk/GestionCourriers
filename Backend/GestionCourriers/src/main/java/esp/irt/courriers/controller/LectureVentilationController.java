package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.LectureVentilation;
import esp.irt.courriers.services.LectureVentilationService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/lectureventilations")
public class LectureVentilationController {
    
    @Autowired
    private LectureVentilationService lectureVentilationService;

    @GetMapping
    public List<LectureVentilation> getAllLectureVentilations() {
        return lectureVentilationService.getAllLectureVentilations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LectureVentilation> getLectureVentilationById(@PathVariable Long id) {
        LectureVentilation lectureVentilation = lectureVentilationService.getLectureVentilationById(id);
        return lectureVentilation != null ? ResponseEntity.ok(lectureVentilation) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<LectureVentilation> saveLectureVentilation(@RequestBody LectureVentilation lectureVentilation) {
        LectureVentilation savedLectureVentilation = lectureVentilationService.saveLectureVentilation(lectureVentilation);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedLectureVentilation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LectureVentilation> updateLectureVentilation(@PathVariable Long id, @RequestBody LectureVentilation lectureVentilation) {
        LectureVentilation updatedLectureVentilation = lectureVentilationService.updateLectureVentilation(id, lectureVentilation);
        return updatedLectureVentilation != null ? ResponseEntity.ok(updatedLectureVentilation) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLectureVentilation(@PathVariable Long id) {
        lectureVentilationService.deleteLectureVentilation(id);
        return ResponseEntity.noContent().build();
    }
}
