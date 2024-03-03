package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.ReceptionCourrier;
import esp.irt.courriers.repository.ReceptionCourrierRepository;

import java.util.List;

@Service
public class ReceptionCourrierService {
    @Autowired
    private ReceptionCourrierRepository receptionCourrierRepository;

    public List<ReceptionCourrier> getAllReceptionCourriers() {
        return receptionCourrierRepository.findAll();
    }

    public ReceptionCourrier getReceptionCourrierById(Long id) {
        return receptionCourrierRepository.findById(id).orElse(null);
    }

    public ReceptionCourrier saveReceptionCourrier(ReceptionCourrier receptionCourrier) {
        return receptionCourrierRepository.save(receptionCourrier);
    }

    public void deleteReceptionCourrier(Long id) {
        receptionCourrierRepository.deleteById(id);
    }
}
