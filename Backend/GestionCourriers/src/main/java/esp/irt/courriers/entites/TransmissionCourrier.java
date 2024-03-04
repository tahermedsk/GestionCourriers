package esp.irt.courriers.entites;


import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class TransmissionCourrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    
    @ManyToOne // Many TransmissionCourriers belong to one Direction
    @JoinColumn(name = "direction") // Nom de colonne pour la relation avec la direction
    private Direction direction;
    // Getters and setters
}

