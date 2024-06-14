
package esp.irt.courriers.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import esp.irt.courriers.entites.ReponseFinal;

@Repository
public interface ReponseFinalRepository extends JpaRepository<ReponseFinal, Long> {
}
