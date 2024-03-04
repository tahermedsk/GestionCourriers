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
<<<<<<< HEAD
    @JoinColumn(name = "direction") // Nom de colonne pour la relation avec la direction
=======
    @JoinColumn(name = "direction_id") // Nom de colonne pour la relation avec la direction
>>>>>>> 88e99e42d7c68cb0ca493549f757c1f01c744825
    private Direction direction;
    // Getters and setters
}

