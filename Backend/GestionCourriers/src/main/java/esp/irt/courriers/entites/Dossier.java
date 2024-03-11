package esp.irt.courriers.entites;

import java.util.List;

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

    public Dossier(Long libelle) {
        this.libelle = libelle;
    }

    @OneToMany(mappedBy = "dossier")
    private List<Courrier> courriers;

}
