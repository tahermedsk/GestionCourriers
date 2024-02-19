package esp.irt.courriers.repository;

import esp.irt.courriers.entites.Courrier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourrierRepository extends JpaRepository<Courrier, Long> {
}
