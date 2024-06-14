package esp.irt.courriers.entites;


import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransmissionCourrier extends Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne // Many TransmissionCourriers belong to one Direction
    @JoinColumn(name = "direction") // Nom de colonne pour la relation avec la direction
    private Direction destinateur;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "ampliations",
        joinColumns = @JoinColumn(name = "TransmissionCourrier_id"),
        inverseJoinColumns = @JoinColumn(name = "direction_id"))
    private List<Direction> ampliations;
    // Getters and setters
}

