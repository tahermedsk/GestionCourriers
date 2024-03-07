package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.services.DirectionService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/directions")
public class DirectionController {
    
    @Autowired
    private DirectionService directionService;

    @GetMapping
    public List<Direction> getAllDirections() {
        return directionService.getAllDirections();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Direction> getDirectionById(@PathVariable Long id) {
        Direction direction = directionService.getDirectionById(id);
        return direction != null ? ResponseEntity.ok(direction) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Direction> saveDirection(@RequestBody Direction direction) {
        Direction savedDirection = directionService.saveDirection(direction);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedDirection);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Direction> updateDirection(@PathVariable Long id, @RequestBody Direction direction) {
        Direction updatedDirection = directionService.updateDirection(id, direction);
        return updatedDirection != null ? ResponseEntity.ok(updatedDirection) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDirection(@PathVariable Long id) {
        directionService.deleteDirection(id);
        return ResponseEntity.noContent().build();
    }

    // New endpoint for finding by code

    @GetMapping("/code/{code}")
    public ResponseEntity<Direction> getDirectionByCode(@PathVariable Long code) {
        Direction direction = directionService.getDirectionByCode(code);
        return direction != null ? ResponseEntity.ok(direction) : ResponseEntity.notFound().build();
    }
}
