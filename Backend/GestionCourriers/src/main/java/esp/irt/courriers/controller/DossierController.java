package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.Dossier;
import esp.irt.courriers.services.DossierService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/dossiers")
public class DossierController {
    
    @Autowired
    private DossierService dossierService;

    @GetMapping
    public List<Dossier> getAllDossiers() {
        return dossierService.getAllDossiers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dossier> getDossierById(@PathVariable Long id) {
        Dossier dossier = dossierService.getDossierById(id);
        return dossier != null ? ResponseEntity.ok(dossier) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Dossier> saveDossier(@RequestBody Dossier dossier) {
        Dossier savedDossier = dossierService.saveDossier(dossier);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDossier);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dossier> updateDossier(@PathVariable Long id, @RequestBody Dossier dossier) {
        Dossier updatedDossier = dossierService.updateDossier(id, dossier);
        return updatedDossier != null ? ResponseEntity.ok(updatedDossier) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDossier(@PathVariable Long id) {
        dossierService.deleteDossier(id);
        return ResponseEntity.noContent().build();
    }
}
