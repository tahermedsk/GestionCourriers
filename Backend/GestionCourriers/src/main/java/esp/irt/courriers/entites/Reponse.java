package esp.irt.courriers.entites;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Reponse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private Date date;
    private String idReponse;
    private String idCourrier;
    private String observations;
    private String nomFichier;
    private String lienFichier;
}
