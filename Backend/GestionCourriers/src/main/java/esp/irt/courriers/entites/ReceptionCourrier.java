package esp.irt.courriers.entites;

import java.util.List;

import javax.persistence.*;

import lombok.Data;



@Entity
@Data
public class ReceptionCourrier extends Courrier {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // Correction de l'annotation mappedBy pour faire référence à l'attribut de Direction approprié
    @OneToMany(mappedBy = "receptionCourrier", cascade = CascadeType.ALL)
    private List<Direction> directions;

    @ManyToOne
    @JoinColumn(name = "lecture_ventilation_id")
    private LectureVentilation lectureVentilation;

    // Les autres attributs et méthodes de l'entité ReceptionCourrier
}
