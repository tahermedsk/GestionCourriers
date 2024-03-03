package esp.irt.courriers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import esp.irt.courriers.entites.TransmissionCourrier;

public interface TransmissionCourrierRepository extends JpaRepository<TransmissionCourrier,Long> {
    
}
