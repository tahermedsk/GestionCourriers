package esp.irt.courriers.controller;


import esp.irt.courriers.entites.Cabinet;
import esp.irt.courriers.repository.CabinetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cabinets")
public class CabinetController {

    @Autowired
    private CabinetRepository cabinetRepository;

    @GetMapping
    public ResponseEntity<List<Cabinet>> getAllCabinets() {
        List<Cabinet> cabinets = cabinetRepository.findAll();
        return new ResponseEntity<>(cabinets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cabinet> getCabinetById(@PathVariable Long id) {
        Optional<Cabinet> cabinet = cabinetRepository.findById(id);
        return cabinet.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Cabinet> createCabinet(@RequestBody Cabinet cabinet) {
        Cabinet createdCabinet = cabinetRepository.save(cabinet);
        return new ResponseEntity<>(createdCabinet, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCabinet(@PathVariable Long id) {
        cabinetRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllCabinets() {
        cabinetRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Ajoutez d'autres méthodes selon les besoins (mise à jour, suppression, recherche par ID, etc.)
}

