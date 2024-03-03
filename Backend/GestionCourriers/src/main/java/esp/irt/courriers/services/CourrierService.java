package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Courrier;
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

    public void deleteCourrier(Long id) {
        courrierRepository.deleteById(id);
    }
}
