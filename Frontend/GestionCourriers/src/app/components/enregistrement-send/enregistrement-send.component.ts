import { Component } from "@angular/core";
import { TransmissionCourrier } from "src/app/models/transmission-courrier";
import { TransmissionCourrierService } from "src/app/services/transmission-courrier.service";

@Component({
  selector: "app-enregistrement-send",
  templateUrl: "./enregistrement-send.component.html",
  styleUrls: ["./enregistrement-send.component.css"],
})
export class EnregistrementSendComponent {
  transmissionCourrier: TransmissionCourrier = new TransmissionCourrier();
  submitted = false;

  constructor(
    private transmissionCourrierService: TransmissionCourrierService
  ) {}

  enregistrerTransmissionCourrier(): void {
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
}
