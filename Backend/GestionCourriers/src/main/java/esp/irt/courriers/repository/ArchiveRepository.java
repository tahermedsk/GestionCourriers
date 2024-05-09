package esp.irt.courriers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import esp.irt.courriers.entites.Archive;

@Repository
public interface ArchiveRepository extends JpaRepository<Archive, Long> {
    
}
