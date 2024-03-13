package esp.irt.courriers.entites;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

import javax.persistence.*;

@Entity 
@Data
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Courrier {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    private Long numero;
    private Date dateEnregistrement;
    private Long refCourrier;
    private String codeBarre;
    private String objet;
    private String observation;
    @Enumerated(EnumType.STRING)
    private ModeTransmission modeTransmission;
    private Date dateReception;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dossier_id")
    private Dossier dossier;

    public Courrier(){}
    
    


}
