

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReponseService } from '../../services/reponse.service';
import { Reponse } from '../../models/reponse';


@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent {
  reponse: Reponse = {
    date: '',
    idReponse: '',
    idCourrier: '',
    observations: '',
    nomFichier: '',
    lienFichier: ''
  };
  selectedFile: File | null = null;
  uploadProgress: number | null = null;
  uploadMessage: string | null = null;

  constructor(private reponseService: ReponseService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.reponseService.uploadFile(this.selectedFile, this.reponse).subscribe(
        (response: Reponse) => {
          this.uploadMessage = 'Téléchargement réussi!';
          console.log(response);
        },
        (error: any) => {
          this.uploadMessage = 'Échec du téléchargement!';
          console.error(error);
        }
      );
    } else {
      this.reponseService.createReponse(this.reponse).subscribe(
        (response: Reponse) => {
          console.log(response);
          this.uploadMessage = 'Reponse enregistrée avec succès!';
        },
        (error: any) => {
          console.error(error);
          this.uploadMessage = 'Échec de l\'enregistrement de la réponse!';
        }
      );
    }
  }
}
