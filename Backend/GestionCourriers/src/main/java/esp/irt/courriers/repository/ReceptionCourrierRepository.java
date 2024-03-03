package esp.irt.courriers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import esp.irt.courriers.entites.ReceptionCourrier;

public interface ReceptionCourrierRepository extends JpaRepository<ReceptionCourrier,Long> {
    
}
