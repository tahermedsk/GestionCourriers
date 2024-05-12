package esp.irt.courriers.entites;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Archive  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date date_trans_dep_inter;
    private String cote_final;
    private String observations;
    private String nomFichier;
    private String lienFichier;
}
