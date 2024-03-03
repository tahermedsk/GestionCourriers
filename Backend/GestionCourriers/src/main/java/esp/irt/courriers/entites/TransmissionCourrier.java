package esp.irt.courriers.entites;


import javax.persistence.*;

import lombok.Data;

@Entity
@Data
public class TransmissionCourrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "expediteur_id") // Nom de colonne pour la relation avec l'expéditeur
    private Direction expediteur;
    
    @ManyToOne
    @JoinColumn(name = "destinataire_id") // Nom de colonne pour la relation avec le destinataire
    private Direction destinataire;

    // Getters and setters
}

