package esp.irt.courriers.entites;


import lombok.Data;

import java.util.List;

import javax.persistence.*;

@Entity @Data
public class Direction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long code;
    private String libelle;
    @ManyToOne
    private Departement departement;
    @OneToMany(mappedBy = "direction", cascade = CascadeType.ALL)
    private List<Departement> departements;
    @ManyToOne
    @JoinColumn(name = "reception_courrier_id")
    private ReceptionCourrier receptionCourrier;
    @ManyToOne
    @JoinColumn(name = "transmissioncourrier_id")
    private TransmissionCourrier transmissionCourrier;
    @ManyToOne
    @JoinColumn(name = "lectureVentilation_id")
    private LectureVentilation lectureVentilation;

}
