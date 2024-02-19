package esp.irt.courriers.entites;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_dep;

    private String nom_dep;

    @ManyToOne
    private Cabinet cabinet;

    @OneToMany(mappedBy = "departement", cascade = CascadeType.ALL)
    private List<Direction> directions;

    public Departement(){
    }


}
