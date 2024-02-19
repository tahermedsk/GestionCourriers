package esp.irt.courriers.entites;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
public class Cabinet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cab;

    private String nom_cab;
    @OneToMany(mappedBy = "cabinet", cascade = CascadeType.ALL)
    private List<Departement> departements;
    public Cabinet(){

    }

}