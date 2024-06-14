import { Component } from '@angular/core';
import { Courrier, Status } from 'src/app/models/courrier';
import { Direction } from 'src/app/models/direction';
import { LectureVentilation } from 'src/app/models/lecture-ventilation';
import { DirectionService } from 'src/app/services/direction.service';
import { LectureVentilationService } from 'src/app/services/lecture-ventilation.service';
import { CourrierService } from '../../services/courrier.service'; // Importer le service CourrierService
@Component({
  selector: 'app-ventilation-dest',
  templateUrl: './ventilation-dest.component.html',
  styleUrls: ['./ventilation-dest.component.css']
})
export class VentilationDestComponent {
  selectedCourrier: Courrier | undefined;
  lectureVentilation: LectureVentilation = new LectureVentilation();
  submitted = false;
  code ?: number  ;
  libelle ?: String ="";
  directions ?: Direction[];
  constructor(private lectureVentilationService: LectureVentilationService,private directionService : DirectionService,private courrierService: CourrierService ) { }

  courriers: Courrier[] = []; // Tableau pour stocker les courriers récupérés

  enregistrerLectureVentilation(): void {
    this.LisSelectedCourrier();
    console.log(this.lectureVentilation.degreUrgence);
    this.lectureVentilationService.createLectureVentilation(this.lectureVentilation)
      .subscribe(
        (response) => {
          console.log(response);
          this.submitted = true;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  ngOnInit(): void {
    this.getCourriers(); // Appel à la méthode pour récupérer les courriers
    this.directionService.getAllDirections().subscribe(
      (data) => {
        this.directions =data;
     
},
      (error) => {
        console.error('Error fetching direction:', error);
      }
    );
    
  }
  getCourriers(): void {
    this.courrierService.getAllCourriers().subscribe(
      (data: Courrier[]) => {
        // Filter the courriers to only include those with the status 'INSTANCE'
        this.courriers = data.filter(courrier => courrier.status === Status.INSTANCE);
      },
      error => {
        console.error('Erreur lors de la récupération des courriers:', error);
        // Gérer les erreurs de récupération des courriers
      }
    );
  }
  
  onInputChange() {
    this.directions?.forEach(element => {if(element.code==this.code){
        this.libelle=element.libelle ;
    }
  }
    )
  }

  LisSelectedCourrier(): void {
    if (this.selectedCourrier) {
      this.courrierService.lisCourrier(this.selectedCourrier.id??0).subscribe(
        (updatedCourrier: Courrier) => {
          // Mettre à jour le statut du courrier dans la liste locale
          const index = this.courriers.findIndex(c => c.id === updatedCourrier.id);
          if (index !== -1) {
            this.courriers[index] = updatedCourrier;
          }
          // Afficher un message ou gérer la réponse si nécessaire
        },
        error => {
          console.error('Erreur lors de le lire du courrier:', error);
          // Gérer les erreurs d'archivage
        }
      );
    }
  }
}
