import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-archivage-dest',
  templateUrl: './archivage-dest.component.html',
  styleUrls: ['./archivage-dest.component.css'],
  providers: [ArchiveService] 
})
export class ArchivageDestComponent  {

  formData = {
    date: '',
    coteFinal: '',
    observations: '',
    file: undefined // ou ''
  };
  
  successMessageVisible = false; // Variable de contrôle pour afficher le message de succès

  constructor(private http: HttpClient, private archiveService: ArchiveService) {}

  onFileSelected(event: any) {
    this.formData.file = event.target.files[0];
  }

  onSubmit() {
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
}