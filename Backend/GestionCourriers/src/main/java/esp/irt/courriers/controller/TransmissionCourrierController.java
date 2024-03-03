package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.TransmissionCourrier;
import esp.irt.courriers.services.TransmissionCourrierService;

import java.util.List;

@RestController
@RequestMapping("/transmissioncourriers")
public class TransmissionCourrierController {
    
    @Autowired
    private TransmissionCourrierService transmissionCourrierService;

    @GetMapping
    public List<TransmissionCourrier> getAllTransmissionCourriers() {
        return transmissionCourrierService.getAllTransmissionCourriers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransmissionCourrier> getTransmissionCourrierById(@PathVariable Long id) {
        TransmissionCourrier transmissionCourrier = transmissionCourrierService.getTransmissionCourrierById(id);
        return transmissionCourrier != null ? ResponseEntity.ok(transmissionCourrier) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<TransmissionCourrier> saveTransmissionCourrier(@RequestBody TransmissionCourrier transmissionCourrier) {
        TransmissionCourrier savedTransmissionCourrier = transmissionCourrierService.saveTransmissionCourrier(transmissionCourrier);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTransmissionCourrier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransmissionCourrier> updateTransmissionCourrier(@PathVariable Long id, @RequestBody TransmissionCourrier transmissionCourrier) {
        TransmissionCourrier updatedTransmissionCourrier = transmissionCourrierService.updateTransmissionCourrier(id, transmissionCourrier);
        return updatedTransmissionCourrier != null ? ResponseEntity.ok(updatedTransmissionCourrier) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransmissionCourrier(@PathVariable Long id) {
        transmissionCourrierService.deleteTransmissionCourrier(id);
        return ResponseEntity.noContent().build();
    }
}
