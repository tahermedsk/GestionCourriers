package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Courrier;
import esp.irt.courriers.entites.Status;
import esp.irt.courriers.repository.CourrierRepository;

import java.util.List;

@Service
public class CourrierService {
    @Autowired
    private CourrierRepository courrierRepository;

    public List<Courrier> getAllCourriers() {
        return courrierRepository.findAll();
    }

    public Courrier getCourrierById(Long id) {
        return courrierRepository.findById(id).orElse(null);
    }

    public Courrier saveCourrier(Courrier courrier) {
        return courrierRepository.save(courrier);
    }

    public Courrier updateCourrier(Long id, Courrier courrier) {
        if (courrierRepository.existsById(id)) {
            courrier.setId(id);
            return courrierRepository.save(courrier);
        }
        return null;
    }

    public void deleteCourrier(Long id) {
        courrierRepository.deleteById(id);
    }

    // New functionalities

    public Courrier getCourrierByNumero(Long numero) {
        return courrierRepository.findByNumero(numero);
    }

    public Courrier getCourrierByRef(Long refCourrier) {
        return courrierRepository.findByRefCourrier(refCourrier);
    }

    public long countCourriers() {
        return courrierRepository.count();
    }

    public Courrier updateCourrierStatus(Long id , String type) {
        Courrier courrier = courrierRepository.findById(id).orElse(null);
        if (courrier != null ) {
            if(type=="archivage"){
            courrier.setStatus(Status.ARCHIVE); // Mettre à jour le statut du courrier
            return courrierRepository.save(courrier);
        }if(type == "lis"){
            courrier.setStatus(Status.LIS); // Mettre à jour le statut du courrier
            return courrierRepository.save(courrier);
        }}
        return null; // Gérer le cas où le courrier n'est pas trouvé
    }
}
