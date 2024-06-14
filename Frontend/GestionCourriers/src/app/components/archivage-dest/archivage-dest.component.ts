import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArchiveService } from '../../services/archive.service';
import { CourrierService } from '../../services/courrier.service'; // Importer le service CourrierService
import { Courrier, Status } from '../../models/courrier'; // Importer le modèle Courrier

@Component({
  selector: 'app-archivage-dest',
  templateUrl: './archivage-dest.component.html',
  styleUrls: ['./archivage-dest.component.css'],
  providers: [ArchiveService]
})
export class ArchivageDestComponent implements OnInit {
  selectedCourrier : Courrier| undefined;
  formData = {
    date: '',
    coteFinal: '',
    observations: '',
    file: undefined, // ou ''
    
  };

  successMessageVisible = false; // Variable de contrôle pour afficher le message de succès
  courriers: Courrier[] = []; // Tableau pour stocker les courriers récupérés

  constructor(
    private http: HttpClient,
    private archiveService: ArchiveService,
    private courrierService: CourrierService // Injection du service CourrierService
  ) {}

  ngOnInit(): void {
    this.getCourriers(); // Appel à la méthode pour récupérer les courriers
  }

  getCourriers(): void {
    this.courrierService.getAllCourriers().subscribe(
      (data: Courrier[]) => {
        // Filter the courriers to only include those with the status 'INSTANCE'
        this.courriers = data.filter(courrier => courrier.status === Status.LIS);
      },
      error => {
        console.error('Erreur lors de la récupération des courriers:', error);
        // Gérer les erreurs de récupération des courriers
      }
    );
  }
  

  onFileSelected(event: any) {
    this.formData.file = event.target.files[0];
  }

  onSubmit() {
    this.archiveSelectedCourrier();
    const formData = new FormData();
    formData.append('date', this.formData.date);
    formData.append('coteFinal', this.formData.coteFinal);
    formData.append('observations', this.formData.observations);
    if (this.formData.file) {
      formData.append('file', this.formData.file);
    }

    this.archiveService.uploadFile(formData)
      .subscribe(response => {
        console.log('Réponse du serveur:', response);
        this.successMessageVisible = true; // Afficher le message de succès
        // Gérer la réponse du serveur
      }, error => {
        console.error('Erreur lors de la soumission du formulaire:', error);
        // Gérer les erreurs
      });
  }

  // Méthode pour masquer le message de succès et revenir au formulaire
  onReturnToForm() {
    this.successMessageVisible = false;
    // Vous pouvez ajouter ici d'autres logiques si nécessaire
  }

  archiveSelectedCourrier(): void {
    if (this.selectedCourrier) {
      this.courrierService.archiveCourrier(this.selectedCourrier.id??0).subscribe(
        (updatedCourrier: Courrier) => {
          // Mettre à jour le statut du courrier dans la liste locale
          const index = this.courriers.findIndex(c => c.id === updatedCourrier.id);
          if (index !== -1) {
            this.courriers[index] = updatedCourrier;
          }
          // Afficher un message ou gérer la réponse si nécessaire
        },
        error => {
          console.error('Erreur lors de l\'archivage du courrier:', error);
          // Gérer les erreurs d'archivage
        }
      );
    }
  }
}
