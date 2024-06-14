
package esp.irt.courriers.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import esp.irt.courriers.entites.ReponseFinal;
import esp.irt.courriers.services.ReponseFinalService;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/reponses")
public class ReponseFinalController {

    @Autowired
    private ReponseFinalService reponseFinalService;

    @GetMapping
    public List<ReponseFinal> getAllReponseFinal() {
        return reponseFinalService.getAllReponseFinal();
    }

    @GetMapping("/{id}")
    public ReponseFinal getReponseFinalById(@PathVariable Long id) {
        return reponseFinalService.getReponseFinalById(id);
    }

    @PostMapping
    public ReponseFinal createReponseFinal(@RequestBody ReponseFinal reponseFinal) {
        return reponseFinalService.createReponseFinal(reponseFinal);
    }

    @DeleteMapping("/{id}")
    public void deleteReponseFinal(@PathVariable Long id) {
        reponseFinalService.deleteReponseFinal(id);
    }

    @PostMapping("/upload")
    public ReponseFinal uploadFile(@RequestParam("file") MultipartFile file,
                                   @RequestParam("copieNote") MultipartFile copieNote,
                                   @RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date,
                                   @RequestParam("idReponse") String idReponse,
                                   @RequestParam("idCourrier") String idCourrier,
                                   @RequestParam("observations") String observations) throws IOException {
        return reponseFinalService.uploadFile(file, copieNote, date, idReponse, idCourrier, observations);
    }
}
