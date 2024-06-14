import { Component, OnInit, ViewChild } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { Dossier } from 'src/app/models/dossier'; // Import the Dossier model
import { ModeTransmission } from 'src/app/models/mode-transmission';
import { ReceptionCourrier } from 'src/app/models/reception-courrier';
import { DirectionService } from 'src/app/services/direction.service';
import { DossierService } from 'src/app/services/dossier.service'; // Import the DossierService
import { ReceptionCourrierService } from 'src/app/services/reception-courrier.service';
import { JointFileComponent } from '../joint-file/joint-file.component';
import { Status } from 'src/app/models/courrier';

@Component({
  selector: 'app-enregistrement-dest',
  templateUrl: './enregistrement-dest.component.html',
  styleUrls: ['./enregistrement-dest.component.css']
})
export class EnregistrementDestComponent implements OnInit {

  receptionCourrier: ReceptionCourrier = new ReceptionCourrier();
  submitted = false;
  code ?: number;
  libelle ?: String = "";
  directions ?: Direction[];
  
  dossiers ?: Dossier[]; // Define a property to hold dossier data
  @ViewChild('jointFileA') jointFileComponent1!: JointFileComponent;
  @ViewChild('jointFileB') jointFileComponent2!: JointFileComponent;
  
  constructor(
    private receptionCourrierService: ReceptionCourrierService,
    private directionService: DirectionService,
    private dossierService: DossierService // Inject the DossierService
  ) { }

  ngOnInit(): void {
    // Fetch direction data
    this.directionService.getAllDirections().subscribe(
      (data) => {
        
        this.directions = data;
      },
      (error) => {
        console.error('Error fetching direction:', error);
      }
    );


  }

  onInputChange() {
    this.directions?.forEach(element => {
      if (element.code == this.code) {
        

        this.libelle = element.libelle;
      }
    });
  }

  enregistrerReceptionCourrier(): void {
    
    
    // Find the selected dossier from the array based on its ID
    this.receptionCourrier.dossier
    const selectedDossier = this.dossiers?.find(dossier => dossier== this.receptionCourrier.dossier);
  
    // Check if a dossier is found
    if (selectedDossier) {
      console.log(selectedDossier);
      
      console.log("ok");
    }
    else{
      var a = this.receptionCourrier.dossier;
      // this.receptionCourrier.dossier = {code:""}
    }
    this.receptionCourrier.dossier = selectedDossier;
    // Log the selected dossier's code if available
    this.receptionCourrier.status = Status.INSTANCE;
    // Call the service method to create the reception courrier
    this.receptionCourrierService.createReceptionCourrier(this.receptionCourrier)
      .subscribe(
        (response) => {
          console.log(response);
          this.submitted = true;
        },
        (error) => {
          console.error(error);
        }
      );
      this.uploadFile();
  }

  uploadFile() {
    this.jointFileComponent1.reference=this.receptionCourrier.refCourrier
    this.jointFileComponent2.reference=this.receptionCourrier.refCourrier
    this.jointFileComponent1.dossier=this.receptionCourrier.dossier?.code
    this.jointFileComponent2.dossier=this.receptionCourrier.dossier?.code
    // Call triggerUpload function of JointFileComponent
    this.jointFileComponent1.triggerUpload();
    this.jointFileComponent2.triggerUpload();
  }
  
}
