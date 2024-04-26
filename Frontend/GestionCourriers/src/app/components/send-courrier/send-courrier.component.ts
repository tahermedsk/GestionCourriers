import { Component, OnInit } from '@angular/core';
import { Courrier } from 'src/app/models/courrier';
import { CourrierService } from 'src/app/services/courrier.service';

@Component({
  selector: 'app-send-courrier',
  templateUrl: './send-courrier.component.html',
  styleUrls: ['./send-courrier.component.css']
})
export class SendCourrierComponent implements OnInit {

  currentStep: string = "Enregistrement-Transmission";
  courrier: Courrier = new Courrier();
  numeroCourrier!: number;

  constructor(private courrierService: CourrierService) { }

  ngOnInit(): void {
    this.updateNumeroCourrier();
  }

  updateNumeroCourrier(): void {
    this.courrierService.getNombreCourriers().subscribe(
      (count: number) => {
        this.numeroCourrier = count;
        this.genererNumeroCourrier(); 
      },
      (error: any) => {
        console.log('Error fetching the number of couriers:', error);
      }
    );
  }

  genererNumeroCourrier(): void {
    this.courrier.id = this.numeroCourrier + 1; 
  }

}
