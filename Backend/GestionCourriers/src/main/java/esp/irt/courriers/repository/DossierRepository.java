package esp.irt.courriers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import esp.irt.courriers.entites.Dossier;

public interface DossierRepository extends JpaRepository<Dossier,Long> {
    
}
