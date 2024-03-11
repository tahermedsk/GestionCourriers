package esp.irt.courriers.entites;


import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReceptionCourrier extends Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(cascade = CascadeType.PERSIST) // Many ReceptionCourriers can belong to one Direction
    @JoinColumn(name = "direction")
    private Direction expediteur;

 

    // Les autres attributs et méthodes de l'entité ReceptionCourrier
}
