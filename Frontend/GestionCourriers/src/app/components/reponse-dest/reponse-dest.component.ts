
import { Component , OnInit, Type } from '@angular/core';

import { ReponseComponent } from '../reponse/reponse.component';

import { ReponseFinalComponent } from '../reponse-final/reponse-final.component';

@Component({
  selector: 'app-reponse-dest',
  templateUrl: './reponse-dest.component.html',
  styleUrls: ['./reponse-dest.component.css']
})
export class ReponseDestComponent implements OnInit {


  
  // Variable pour stocker le nom du composant à charger
  selectedComponent: Type<any> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  // Fonction pour charger différents composants en fonction du bouton cliqué
  loadComponent(component: string) {
    
    switch (component) {
      case 'reponse':
        this.selectedComponent = ReponseComponent;
        break;
      case 'reponse-fin':
        this.selectedComponent = ReponseFinalComponent;
        break;
      
      default:
        this.selectedComponent = null;
        break;
  }
}
}