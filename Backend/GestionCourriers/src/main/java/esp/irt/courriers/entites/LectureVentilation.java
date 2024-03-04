package esp.irt.courriers.entites;

import lombok.Data;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity 
@Data

public class LectureVentilation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateEnregistrement;
    private boolean sg;
    private boolean ministre;
    private Date date_sg;
    private Date date_ministre;
     @Enumerated(EnumType.STRING)
    private DegreUrgence degreUrgence;
    private Date date_ventilation;
    private String observation;
    private String annotation;
    @ManyToOne // Many LectureVentilations can belong to one Direction
    @JoinColumn(name = "direction_id")
    private Direction direction;

    

    @OneToOne(mappedBy = "lectureVentilation", cascade = CascadeType.ALL)
    private ReceptionCourrier receptionCourrier;

    
}
