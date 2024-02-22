import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-courrier',
  templateUrl: './send-courrier.component.html',
  styleUrls: ['./send-courrier.component.css']
})
export class SendCourrierComponent {

  currentStep: string = "Enregistrement-Transmission";

  constructor() { }

  ngOnInit(): void {
  }


}
