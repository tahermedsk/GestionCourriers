package esp.irt.courriers.entites;

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
    private ModeTransmusion modeTransmission;
    private Date dateReception;

    @OneToOne(mappedBy = "courrier", cascade = CascadeType.ALL)
    private Dossier dossier;

    @ManyToOne // Many Courriers can have one expediteur
    @JoinColumn(name = "expediteur_id")
    private Direction expediteur;
}
