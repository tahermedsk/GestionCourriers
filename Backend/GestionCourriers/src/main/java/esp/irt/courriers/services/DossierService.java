package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Dossier;
import esp.irt.courriers.repository.DossierRepository;

import java.util.List;

@Service
public class DossierService {
    @Autowired
    private DossierRepository dossierRepository;

    public List<Dossier> getAllDossiers() {
        return dossierRepository.findAll();
    }

    public Dossier getDossierById(Long id) {
        return dossierRepository.findById(id).orElse(null);
    }

    public Dossier saveDossier(Dossier dossier) {
        return dossierRepository.save(dossier);
    }

    public Dossier updateDossier(Long id, Dossier dossier) {
        if (dossierRepository.existsById(id)) {
            dossier.setId(id);
            return dossierRepository.save(dossier);
        }
        return null;
    }

    public void deleteDossier(Long id) {
        dossierRepository.deleteById(id);
    }
}
