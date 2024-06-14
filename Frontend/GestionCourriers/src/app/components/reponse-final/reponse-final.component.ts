

import { Component } from '@angular/core';
import { ReponseFinalService } from '../../services/reponse-final.service';
import { ReponseFinal } from '../../models/reponse-final';



@Component({
  selector: 'app-reponse-final',
  templateUrl: './reponse-final.component.html',
  styleUrls: ['./reponse-final.component.css']
})
export class ReponseFinalComponent {
  reponseFinal: ReponseFinal = {
    date: '',
    idReponse: '',
    idCourrier: '',
    observations: '',
    nomFichier: '',
    lienFichier: '',
    nomCopieNote: '',
    lienCopieNote: ''
  };
  selectedFile: File | null = null;
  selectedCopieNote: File | null = null;
  uploadProgress: number | null = null;
  uploadMessage: string | null = null;

  constructor(private reponseFinalService: ReponseFinalService) {}

  onFileSelected(event: any, type: string): void {
    if (type === 'file') {
      this.selectedFile = event.target.files[0];
    } else if (type === 'copieNote') {
      this.selectedCopieNote = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile && this.selectedCopieNote) {
      this.reponseFinalService.uploadFile(this.selectedFile, this.selectedCopieNote, this.reponseFinal).subscribe(
        (response: ReponseFinal) => {
          this.uploadMessage = 'Téléchargement réussi!';
          console.log(response);
        },
        (error: any) => {
          this.uploadMessage = 'Échec du téléchargement!';
          console.error(error);
        }
      );
    } else {
      this.reponseFinalService.createReponse(this.reponseFinal).subscribe(
        (response: ReponseFinal) => {
          console.log(response);
          this.uploadMessage = 'Réponse enregistrée avec succès!';
        },
        (error: any) => {
          console.error(error);
          this.uploadMessage = 'Échec de l\'enregistrement de la réponse!';
        }
      );
    }
  }
}
