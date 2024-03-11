package esp.irt.courriers.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.*;

@Entity 
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Direction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long code;
    private String libelle;

    @ManyToOne // Many Directions can belong to one Departement
    @JoinColumn(name = "departement_id")
    private Departement departement; // Change from List<Departement> to single Departement



    public Direction(String directionValue) {
        this.libelle = directionValue;
        // Initialize other fields as needed...
    }
    


    



}
