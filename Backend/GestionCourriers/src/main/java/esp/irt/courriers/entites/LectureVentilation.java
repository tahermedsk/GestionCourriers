package esp.irt.courriers.entites;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import javax.persistence.*;

@Entity 
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    @JoinColumn(name = "direction")
    private Direction direction;

    

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "receptionCourrier_id")
    private ReceptionCourrier receptionCourrier;

    
}
