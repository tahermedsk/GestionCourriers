package esp.irt.courriers.controller;

import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.repository.DirectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/directions")
public class DirectionController {

    @Autowired
    private DirectionRepository directionRepository;

    @GetMapping
    public ResponseEntity<List<Direction>> getAllDirections() {
        List<Direction> directions = directionRepository.findAll();
        return new ResponseEntity<>(directions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Direction> getDirectionById(@PathVariable Long id) {
        Optional<Direction> direction = directionRepository.findById(id);
        return direction.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Direction> createDirection(@RequestBody Direction direction) {
        Direction createdDirection = directionRepository.save(direction);
        return new ResponseEntity<>(createdDirection, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDirection(@PathVariable Long id) {
        directionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllDirections() {
        directionRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Ajoutez d'autres méthodes selon les besoins (mise à jour, suppression, recherche par ID, etc.)
}
