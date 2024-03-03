package esp.irt.courriers.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.TransmissionCourrier;
import esp.irt.courriers.repository.TransmissionCourrierRepository;

import java.util.List;

@Service
public class TransmissionCourrierService {
    @Autowired
    private TransmissionCourrierRepository transmissionCourrierRepository;

    public List<TransmissionCourrier> getAllTransmissionCourriers() {
        return transmissionCourrierRepository.findAll();
    }

    public TransmissionCourrier getTransmissionCourrierById(Long id) {
        return transmissionCourrierRepository.findById(id).orElse(null);
    }

    public TransmissionCourrier saveTransmissionCourrier(TransmissionCourrier transmissionCourrier) {
        return transmissionCourrierRepository.save(transmissionCourrier);
    }

    public TransmissionCourrier updateTransmissionCourrier(Long id, TransmissionCourrier transmissionCourrier) {
        if (transmissionCourrierRepository.existsById(id)) {
            transmissionCourrier.setId(id);
            return transmissionCourrierRepository.save(transmissionCourrier);
        }
        return null;
    }

    public void deleteTransmissionCourrier(Long id) {
        transmissionCourrierRepository.deleteById(id);
    }
}
