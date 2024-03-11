package esp.irt.courriers.entites;

import com.fasterxml.jackson.annotation.JsonAlias;


public enum ModeTransmission {
    mains_propres,
    Mail,
    Fax,
    Autre,
    Cahier_de_transmission,  // Nouvelle valeur
    @JsonAlias("Accusé de réception")
    Accuse_de_reception

}
