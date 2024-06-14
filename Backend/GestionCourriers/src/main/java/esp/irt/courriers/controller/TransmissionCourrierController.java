package esp.irt.courriers.controller;

import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.entites.Dossier;
import esp.irt.courriers.repository.DirectionRepository;
import esp.irt.courriers.repository.DossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.TransmissionCourrier;
import esp.irt.courriers.services.TransmissionCourrierService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/transmissioncourriers")
public class TransmissionCourrierController {
    
    @Autowired
    private TransmissionCourrierService transmissionCourrierService;

    @Autowired
    private DossierRepository dossierRepository;

    @Autowired
    private DirectionRepository directionRepository;



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
        System.out.println("Saving transmission courrier: " + transmissionCourrier.toString());

        // Vérifiez si le dossier existe dans la base de données
        Optional<Dossier> dossierOpt = dossierRepository.findById(transmissionCourrier.getDossier().getId());
        if (!dossierOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        transmissionCourrier.setDossier(dossierOpt.get());

        // Chargez les directions existantes depuis la base de données pour les ampliations
        List<Direction> managedAmpliations = new ArrayList<>();
        for (Direction direction : transmissionCourrier.getAmpliations()) {
            Optional<Direction> directionOpt = directionRepository.findById(direction.getId());
            if (directionOpt.isPresent()) {
                managedAmpliations.add(directionOpt.get());
            }
        }
        transmissionCourrier.setAmpliations(managedAmpliations);

        // Chargez le destinateur s'il est présent
        if (transmissionCourrier.getDestinateur() != null) {
            Optional<Direction> destinateurOpt = directionRepository.findById(transmissionCourrier.getDestinateur().getId());
            if (destinateurOpt.isPresent()) {
                transmissionCourrier.setDestinateur(destinateurOpt.get());
            }
        }

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
