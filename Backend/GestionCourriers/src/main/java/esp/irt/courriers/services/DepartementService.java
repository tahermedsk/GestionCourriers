package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Departement;
import esp.irt.courriers.repository.DepartementRepository;

import java.util.List;

@Service
public class DepartementService {
    @Autowired
    private DepartementRepository departementRepository;

    public List<Departement> getAllDepartements() {
        return departementRepository.findAll();
    }

    public Departement getDepartementById(Long id) {
        return departementRepository.findById(id).orElse(null);
    }

    public Departement saveDepartement(Departement departement) {
        return departementRepository.save(departement);
    }

    public Departement updateDepartement(Long id, Departement departement) {
        if (departementRepository.existsById(id)) {
            departement.setId(id);
            return departementRepository.save(departement);
        }
        return null;
    }

    public void deleteDepartement(Long id) {
        departementRepository.deleteById(id);
    }

    // New functionality

    public Departement getDepartementByCode(Long code) {
        return departementRepository.findByCode(code);
    }
}
