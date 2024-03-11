package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.Departement;
import esp.irt.courriers.services.DepartementService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/departements")
public class DepartementController {
    
    @Autowired
    private DepartementService departementService;

    @GetMapping
    public List<Departement> getAllDepartements() {
        return departementService.getAllDepartements();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Departement> getDepartementById(@PathVariable Long id) {
        Departement departement = departementService.getDepartementById(id);
        return departement != null ? ResponseEntity.ok(departement) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Departement> saveDepartement(@RequestBody Departement departement) {
        Departement savedDepartement = departementService.saveDepartement(departement);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDepartement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Departement> updateDepartement(@PathVariable Long id, @RequestBody Departement departement) {
        Departement updatedDepartement = departementService.updateDepartement(id, departement);
        return updatedDepartement != null ? ResponseEntity.ok(updatedDepartement) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartement(@PathVariable Long id) {
        departementService.deleteDepartement(id);
        return ResponseEntity.noContent().build();
    }

    // New endpoint for finding by code

    @GetMapping("/code/{code}")
    public ResponseEntity<Departement> getDepartementByCode(@PathVariable Long code) {
        Departement departement = departementService.getDepartementByCode(code);
        return departement != null ? ResponseEntity.ok(departement) : ResponseEntity.notFound().build();
    }
}
