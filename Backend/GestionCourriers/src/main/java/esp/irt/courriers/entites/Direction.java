package esp.irt.courriers.entites;

import lombok.Data;

import java.util.List;

import javax.persistence.*;

@Entity 
@Data
public class Direction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long code;
    private String libelle;

    @ManyToOne // Many Directions can belong to one Departement
    @JoinColumn(name = "departement_id")
    private Departement departement; // Change from List<Departement> to single Departement

    @OneToMany(mappedBy = "direction") // One Direction can have multiple LectureVentilation instances
    private List<LectureVentilation> lectureVentilations;

    @OneToMany(mappedBy = "direction") // One Direction can have multiple ReceptionCourrier instances
    private List<ReceptionCourrier> receptionCourriers;

    @OneToMany(mappedBy = "direction") // One Direction can have multiple TransmissionCourrier instances
    private List<TransmissionCourrier> transmissionCourriers;

}
