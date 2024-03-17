package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.ReceptionCourrier;
import esp.irt.courriers.services.ReceptionCourrierService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/receptioncourriers")
public class ReceptionCourrierController {
    
    @Autowired
    private ReceptionCourrierService receptionCourrierService;

    @GetMapping
    public List<ReceptionCourrier> getAllReceptionCourriers() {
        return receptionCourrierService.getAllReceptionCourriers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReceptionCourrier> getReceptionCourrierById(@PathVariable Long id) {
        ReceptionCourrier receptionCourrier = receptionCourrierService.getReceptionCourrierById(id);
        return receptionCourrier != null ? ResponseEntity.ok(receptionCourrier) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<ReceptionCourrier> saveReceptionCourrier(@RequestBody ReceptionCourrier receptionCourrier) {
        System.out.println(receptionCourrier);
        ReceptionCourrier savedReceptionCourrier = receptionCourrierService.saveReceptionCourrier(receptionCourrier);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReceptionCourrier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReceptionCourrier> updateReceptionCourrier(@PathVariable Long id, @RequestBody ReceptionCourrier receptionCourrier) {
        ReceptionCourrier updatedReceptionCourrier = receptionCourrierService.updateReceptionCourrier(id, receptionCourrier);
        return updatedReceptionCourrier != null ? ResponseEntity.ok(updatedReceptionCourrier) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReceptionCourrier(@PathVariable Long id) {
        receptionCourrierService.deleteReceptionCourrier(id);
        return ResponseEntity.noContent().build();
    }
}
