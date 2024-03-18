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

  constructor() { }

  ngOnInit(): void {
  }

  nouveauCourrier(): void {
    // this.courrier = new Courrier(); 
    // const today = new Date(); 
    // this.courrier.dateEnregistrement = today; 
    window.location.reload(); 
  }
  
}
