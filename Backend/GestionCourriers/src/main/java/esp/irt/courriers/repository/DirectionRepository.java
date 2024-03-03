package esp.irt.courriers.repository;

import esp.irt.courriers.entites.Direction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectionRepository extends JpaRepository<Direction, Long> {
    Direction findByCode(Long code);
}
