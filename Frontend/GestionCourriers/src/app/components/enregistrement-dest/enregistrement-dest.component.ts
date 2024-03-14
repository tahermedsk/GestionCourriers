import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/models/direction';
import { ModeTransmission } from 'src/app/models/mode-transmission';
import { ReceptionCourrier } from 'src/app/models/reception-courrier';
import { DirectionService } from 'src/app/services/direction.service';
import { ReceptionCourrierService } from 'src/app/services/reception-courrier.service';

@Component({
  selector: 'app-enregistrement-dest',
  templateUrl: './enregistrement-dest.component.html',
  styleUrls: ['./enregistrement-dest.component.css']
})
export class EnregistrementDestComponent implements OnInit {

  receptionCourrier: ReceptionCourrier = new ReceptionCourrier();
  submitted = false;
  code ?: number  ;
   libelle ?: String ="";
   directions ?: Direction[];
  constructor(private receptionCourrierService: ReceptionCourrierService,private directionService : DirectionService) { }

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
  enregistrerReceptionCourrier(): void {
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
  }

}
