package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.Courrier;
import esp.irt.courriers.services.CourrierService;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/courriers")
public class CourrierController {
    
    @Autowired
    private CourrierService courrierService;

    // CRUD Operations

    @GetMapping
    public List<Courrier> getAllCourriers() {
        return courrierService.getAllCourriers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Courrier> getCourrierById(@PathVariable Long id) {
        Courrier courrier = courrierService.getCourrierById(id);
        return courrier != null ? ResponseEntity.ok(courrier) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Courrier> saveCourrier(@RequestBody Courrier courrier) {

        Courrier savedCourrier = courrierService.saveCourrier(courrier);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCourrier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Courrier> updateCourrier(@PathVariable Long id, @RequestBody Courrier courrier) {
        Courrier updatedCourrier = courrierService.updateCourrier(id, courrier);
        return updatedCourrier != null ? ResponseEntity.ok(updatedCourrier) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourrier(@PathVariable Long id) {
        courrierService.deleteCourrier(id);
        return ResponseEntity.noContent().build();
    }

    // Additional Operations

    @GetMapping("/numero/{numero}")
    public ResponseEntity<Courrier> getCourrierByNumero(@PathVariable Long numero) {
        Courrier courrier = courrierService.getCourrierByNumero(numero);
        return courrier != null ? ResponseEntity.ok(courrier) : ResponseEntity.notFound().build();
    }

    @GetMapping("/ref/{refCourrier}")
    public ResponseEntity<Courrier> getCourrierByRef(@PathVariable Long refCourrier) {
        Courrier courrier = courrierService.getCourrierByRef(refCourrier);
        return courrier != null ? ResponseEntity.ok(courrier) : ResponseEntity.notFound().build();
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countCourriers() {
        long count = courrierService.countCourriers();
        return ResponseEntity.ok(count);
    }

    @PutMapping("/{id}/archive")
    public ResponseEntity<Courrier> archiveCourrier(@PathVariable Long id) {
        Courrier courrier = courrierService.updateCourrierStatus(id,"archivage");
        return courrier != null ? ResponseEntity.ok(courrier) : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/lis")
    public ResponseEntity<Courrier> lisCourrier(@PathVariable Long id) {
        Courrier courrier = courrierService.updateCourrierStatus(id,"lis");
        return courrier != null ? ResponseEntity.ok(courrier) : ResponseEntity.notFound().build();
    }
}
