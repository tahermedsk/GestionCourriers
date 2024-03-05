package esp.irt.courriers.entites;


import javax.persistence.*;

import lombok.Data;



@Entity
@Data
public class ReceptionCourrier extends Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne // Many ReceptionCourriers can belong to one Direction
    @JoinColumn(name = "direction")
    private Direction direction;

    @OneToOne
    @JoinColumn(name = "lecture_ventilation_id")
    private LectureVentilation lectureVentilation;

    // Les autres attributs et méthodes de l'entité ReceptionCourrier
}
