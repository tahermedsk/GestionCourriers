package esp.irt.courriers.entites;

import lombok.Data;

import java.util.List;

import javax.persistence.*;

@Entity 
@Data
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long code;
    private String libelle;

    @OneToMany(mappedBy = "departement") // One Departement can have multiple Directions
    private List<Direction> directions;
}
