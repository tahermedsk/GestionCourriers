import { Component } from "@angular/core";
import { Direction } from "src/app/models/direction";
import { TransmissionCourrier } from "src/app/models/transmission-courrier";
import { DirectionService } from "src/app/services/direction.service";
import { TransmissionCourrierService } from "src/app/services/transmission-courrier.service";

@Component({
  selector: "app-enregistrement-send",
  templateUrl: "./enregistrement-send.component.html",
  styleUrls: ["./enregistrement-send.component.css"],
})
export class EnregistrementSendComponent {
  transmissionCourrier: TransmissionCourrier = new TransmissionCourrier();
  submitted = false;
  code?: number;
  libelle?: string = "";
  directions?: Direction[];
  amplitinos?: Direction[];
  selectedAmpliations: Direction[] = []; // Store selected ampliations here

  constructor(
    private transmissionCourrierService: TransmissionCourrierService,
    private directionService: DirectionService
  ) {}

  enregistrerTransmissionCourrier(): void {
    // Assign selected ampliations to transmissionCourrier
    this.transmissionCourrier.ampliations = this.selectedAmpliations;
    console.log(this.selectedAmpliations);
    this.transmissionCourrierService
      .createTransmissionCourrier(this.transmissionCourrier)
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
    this.amplitinos = [{code:123,libelle:"Fax"},{code:24,libelle:"Mail"},{code:3,libelle:"other"}]
    this.directionService.getAllDirections().subscribe(
      (data) => {
        this.directions = data;
      },
      (error) => {
        console.error("Error fetching direction:", error);
      }
    );
  }

  onInputChange() {
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
  
}
