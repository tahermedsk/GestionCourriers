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
  code ?: number  ;
  libelle ?: String ="";
  directions ?: Direction[];
  constructor(
    private transmissionCourrierService: TransmissionCourrierService , private directionService : DirectionService
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

  ngOnInit(): void {
    this.directionService.getAllDirections().subscribe(
      (data) => {
        this.directions =data;
     
},
      (error) => {
        console.error('Error fetching direction:', error);
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
}
