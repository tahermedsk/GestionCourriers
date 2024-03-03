package esp.irt.courriers.entites;

import lombok.Data;

import javax.persistence.*;

@Entity @Data
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long code;

    private String libelle;

    @ManyToOne
    @JoinColumn(name = "direction_id")
    private Direction direction;


}
