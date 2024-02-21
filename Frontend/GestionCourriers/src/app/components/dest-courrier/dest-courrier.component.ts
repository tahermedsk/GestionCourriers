import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dest-courrier',
  templateUrl: './dest-courrier.component.html',
  styleUrls: ['./dest-courrier.component.css']
})
export class DestCourrierComponent implements OnInit {

  currentStep: string = "Enregistrement";

  constructor() { }

  ngOnInit(): void {
  }

}
