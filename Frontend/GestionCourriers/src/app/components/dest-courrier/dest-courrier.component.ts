import { Component, OnInit } from '@angular/core';
import { Courrier } from 'src/app/models/courrier';

@Component({
  selector: 'app-dest-courrier',
  templateUrl: './dest-courrier.component.html',
  styleUrls: ['./dest-courrier.component.css']
})
export class DestCourrierComponent implements OnInit {

  currentStep: string = "Enregistrement";
  courrier: Courrier = new Courrier();
  numeroCourrier: number = 1; 

  constructor() { }

  ngOnInit(): void {
    this.genererNumeroCourrier(); 
  }

  genererNumeroCourrier(): void {
    this.courrier.id = this.numeroCourrier;
  }

  nouveauCourrier(): void {
    this.numeroCourrier++;
    this.genererNumeroCourrier();
    window.location.reload();
  }
}
