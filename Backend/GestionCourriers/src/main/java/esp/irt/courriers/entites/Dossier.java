package esp.irt.courriers.entites;

import javax.persistence.*;

import lombok.Data;

@Entity 
@Data
public class Dossier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long code;
    private Long libelle;

    @ManyToOne
    @JoinColumn(name = "courrier_id") // Many Dossiers belong to one Courrier
    private Courrier courrier;
}
