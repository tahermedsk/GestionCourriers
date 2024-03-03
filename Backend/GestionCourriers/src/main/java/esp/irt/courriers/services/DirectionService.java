package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.repository.DirectionRepository;

import java.util.List;

@Service
public class DirectionService {
    @Autowired
    private DirectionRepository directionRepository;

    public List<Direction> getAllDirections() {
        return directionRepository.findAll();
    }

    public Direction getDirectionById(Long id) {
        return directionRepository.findById(id).orElse(null);
    }

    public Direction saveDirection(Direction direction) {
        return directionRepository.save(direction);
    }

    public Direction updateDirection(Long id, Direction direction) {
        if (directionRepository.existsById(id)) {
            direction.setId(id);
            return directionRepository.save(direction);
        }
        return null;
    }

    public void deleteDirection(Long id) {
        directionRepository.deleteById(id);
    }

    // New functionality

    public Direction getDirectionByCode(Long code) {
        return directionRepository.findByCode(code);
    }
}
