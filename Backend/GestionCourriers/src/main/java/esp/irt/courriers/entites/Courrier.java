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

    @ManyToOne
    @JoinColumn(name = "dossier_id") // Nom de la colonne pour la relation avec le dossier
    private Dossier dossier;

    @Enumerated(EnumType.STRING)
    private Status status;

    public Courrier() {}
}
