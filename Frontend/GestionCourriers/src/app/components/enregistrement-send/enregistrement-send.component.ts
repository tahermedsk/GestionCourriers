import {Component, OnInit, ViewChild} from "@angular/core";
import { Direction } from "src/app/models/direction";
import { Dossier } from "src/app/models/dossier";
import { TransmissionCourrier } from "src/app/models/transmission-courrier";
import { DirectionService } from "src/app/services/direction.service";
import { DossierService } from "src/app/services/dossier.service";
import { TransmissionCourrierService } from "src/app/services/transmission-courrier.service";
import { JointFileComponent } from "../joint-file/joint-file.component";
import { Status } from "src/app/models/courrier";

@Component({
  selector: "app-enregistrement-send",
  templateUrl: "./enregistrement-send.component.html",
  styleUrls: ["./enregistrement-send.component.css"],
})
export class EnregistrementSendComponent implements OnInit{
  transmissionCourrier: TransmissionCourrier = new TransmissionCourrier();
  submitted = false;
  code?: number;
  libelle?: string = "";
  directions?: Direction[];
  amplitinos?: Direction[];
  selectedAmpliations: Direction[] = []; // Store selected ampliations here
  dossiers ?: Dossier[];
  @ViewChild('jointFileA') jointFileComponent1!: JointFileComponent;
  @ViewChild('jointFileB') jointFileComponent2!: JointFileComponent;
  selectedDossier ?:Dossier;
  constructor(
    private transmissionCourrierService: TransmissionCourrierService,
    private directionService: DirectionService,
    private dossierService: DossierService
  ) {}

  enregistrerTransmissionCourrier(): void {
    // Assign selected ampliations to transmissionCourrier
    this.selectedDossier = this.dossiers?.find(dossier => dossier.id === this.transmissionCourrier.dossier);

    // Check if a dossier is found
    if (this.selectedDossier) {
      // Assign the selected dossier to transmissionCourrier
      this.transmissionCourrier.dossier = this.selectedDossier;
      console.log("Selected Dossier:", this.selectedDossier);
    } else {
      // Handle the case when no dossier is found
      console.log("No dossier selected");
    }
    console.log("nice one",this.transmissionCourrier.dossier?.code);
    this.selectedDossier = this.dossiers?.find(dossier => dossier == this.transmissionCourrier.dossier);
    console.log("selected :"+this.selectedDossier)
    
    this.transmissionCourrier.dossier = this.selectedDossier;
    // Log the selected dossier's code if available
    console.log("dsss :" + (this.selectedDossier ? this.selectedDossier.code : ""));
    
    console.log(this.transmissionCourrier.dossier)
    this.transmissionCourrier.ampliations = this.selectedAmpliations;
    console.log(this.selectedAmpliations);
    this.transmissionCourrier.status = Status.INSTANCE;
    this.transmissionCourrier.ampliations=this.selectedAmpliations;
    console.log("le variable complet",this.transmissionCourrier);
    this.transmissionCourrierService
      .createTransmissionCourrier(this.transmissionCourrier)
      .subscribe(
        (response) => {
          console.log("reponse:");
          console.log(response);
          this.submitted = true;
        },
        (error) => {
          console.error(error);
        }
      );
      this.uploadFile();
  }

  ngOnInit(): void {
    this.directionService.getAllDirections().subscribe((res)=>{
      this.amplitinos =res;
      console.log("Amplitions",this.amplitinos);
    });
    console.log(this.jointFileComponent1)
    console.log(this.jointFileComponent2)
    this.directionService.getAllDirections().subscribe(
      (data) => {
        this.directions = data;
      },
      (error) => {
        console.error("Error fetchinUpload(g direction:", error);
      }
    );

    this.dossierService.getAllDossiers().subscribe(
      (data) => {
        this.dossiers = data;
        console.log("dossieeeeeeer",this.dossiers);
      },
      (error) => {
        console.error('Error fetching dossier:', error);
      }
    );
  }

  onInputChange() {
    console.log(this.jointFileComponent1)
    console.log(this.jointFileComponent2)
    this.directions?.forEach((element) => {
      if (element.code == this.code) {
        this.libelle = element.libelle?.toString(); // Convert to string
      }
    });
  }
  

  // Method to handle selection/deselection of ampliations
  toggleAmpliationSelection(direction: Direction) {
    const index = this.selectedAmpliations.findIndex(selected => selected.code === direction.code);
    if (index !== -1) {
      // If already selected, remove it from the array
      this.selectedAmpliations.splice(index, 1);
    } else {
      // If not selected, add it to the array
      this.selectedAmpliations.push(direction);
    }
  }
  
  uploadFile() {
    console.log("ooooooooooo",this.selectedDossier);
    this.jointFileComponent1.reference=this.transmissionCourrier.refCourrier
    this.jointFileComponent2.reference=this.transmissionCourrier.refCourrier
    this.jointFileComponent1.dossier=this.transmissionCourrier.dossier?.code
    this.jointFileComponent2.dossier=this.transmissionCourrier.dossier?.code
    // Call triggerUpload function of JointFileComponent
    this.jointFileComponent1.triggerUpload();
    this.jointFileComponent2.triggerUpload();
  }
}
