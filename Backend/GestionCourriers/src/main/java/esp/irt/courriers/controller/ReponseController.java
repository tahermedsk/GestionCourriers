package esp.irt.courriers.controller;

import esp.irt.courriers.entites.Reponse;
import esp.irt.courriers.services.ReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reponses")
public class ReponseController {

    @Autowired
    private ReponseService reponseService;

    @GetMapping
    public List<Reponse> getAllReponses() {
        return reponseService.getAllReponses();
    }

    @GetMapping("/{id}")
    public Reponse getReponseById(@PathVariable Long id) {
        return reponseService.getReponseById(id);
    }

    @PostMapping
    public Reponse createReponse(@RequestBody Reponse reponse) {
        return reponseService.createReponse(reponse);
    }

    @DeleteMapping("/{id}")
    public void deleteReponse(@PathVariable Long id) {
        reponseService.deleteReponse(id);
    }

    @PostMapping("/upload")
    public Reponse uploadFile(@RequestParam("file") MultipartFile file,
                              @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date,
                              @RequestParam("idReponse") String idReponse,
                              @RequestParam("idCourrier") String idCourrier,
                              @RequestParam("observations") String observations) throws IOException {
        return reponseService.uploadFile(file, date, idReponse, idCourrier, observations);
    }
}
