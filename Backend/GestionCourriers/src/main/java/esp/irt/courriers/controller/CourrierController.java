package esp.irt.courriers.controller;

import esp.irt.courriers.entites.Courrier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import esp.irt.courriers.repository.CourrierRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courriers")
public class CourrierController {

    @Autowired
    private CourrierRepository courrierRepository;

    @GetMapping
    public ResponseEntity<List<Courrier>> getAllCourriers() {
        List<Courrier> courriers = courrierRepository.findAll();
        return new ResponseEntity<>(courriers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Courrier> getCourrierById(@PathVariable Long id) {
        Optional<Courrier> courrier = courrierRepository.findById(id);
        return courrier.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Courrier> createCourrier(@RequestBody Courrier courrier) {
        Courrier createdCourrier = courrierRepository.save(courrier);
        return new ResponseEntity<>(createdCourrier, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourrier(@PathVariable Long id) {
        courrierRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllCourriers() {
        courrierRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Ajoutez d'autres méthodes selon les besoins (mise à jour, suppression, recherche par ID, etc.)
}
