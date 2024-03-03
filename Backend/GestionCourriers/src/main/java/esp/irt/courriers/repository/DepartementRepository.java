package esp.irt.courriers.repository;

import esp.irt.courriers.entites.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartementRepository extends JpaRepository<Departement, Long> {
    Departement findByCode(Long code);
}
