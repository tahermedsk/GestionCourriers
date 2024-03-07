import { Component, OnInit } from '@angular/core';
import { ModeTransmission } from 'src/app/models/mode-transmission';
import { ReceptionCourrier } from 'src/app/models/reception-courrier';
import { ReceptionCourrierService } from 'src/app/services/reception-courrier.service';

@Component({
  selector: 'app-enregistrement-dest',
  templateUrl: './enregistrement-dest.component.html',
  styleUrls: ['./enregistrement-dest.component.css']
})
export class EnregistrementDestComponent implements OnInit {

  receptionCourrier: ReceptionCourrier = new ReceptionCourrier();
  submitted = false;

  constructor(private receptionCourrierService: ReceptionCourrierService) { }

  ngOnInit(): void {
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
