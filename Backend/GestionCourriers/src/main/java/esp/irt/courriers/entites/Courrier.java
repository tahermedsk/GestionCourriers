package esp.irt.courriers.entites;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity @Data
public class Courrier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long numero ;
    private String nom_emeteur;
    private String nom_destinateur;
    private String type;
    private String statut;


}
