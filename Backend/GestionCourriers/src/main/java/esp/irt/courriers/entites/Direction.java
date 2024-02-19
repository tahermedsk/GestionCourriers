package esp.irt.courriers.entites;


import lombok.Data;

import javax.persistence.*;

@Entity @Data
public class Direction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @ManyToOne
    private Departement departement;


    public Direction() {
    }

}
