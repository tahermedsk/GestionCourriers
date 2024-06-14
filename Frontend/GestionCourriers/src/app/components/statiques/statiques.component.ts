import { Component, OnInit } from '@angular/core';
import { CourrierService } from '../../services/courrier.service';
import { Courrier } from '../../models/courrier';
import { Status } from '../../models/courrier'; // Importer l'énumération Status

@Component({
  selector: 'app-statiques',
  templateUrl: './statiques.component.html',
  styleUrls: ['./statiques.component.css']
})
export class StatiquesComponent implements OnInit {
  courriers: Courrier[] = [];
  filteredCourriers: Courrier[] = [];
  selectedTab: string = 'tous'; // Onglet sélectionné par défaut

  // Exposer l'énumération Status dans le template
  Status = Status;

  constructor(private courrierService: CourrierService) {}

  ngOnInit(): void {
    this.getCourriers();
  }

  getCourriers(): void {
    this.courrierService.getAllCourriers().subscribe(data => {
      this.courriers = data;
      console.log(data)
      this.filteredCourriers = data; // Initialiser avec tous les courriers
    });
  }

  filterCourriers(status: Status): void {
    this.selectedTab = status.toLowerCase(); // Use lowercase tab names for simplicity
    this.filteredCourriers = this.courriers.filter(courrier => courrier.status === status);
  }

  resetFilter(): void {
    this.selectedTab = 'tous';
    this.filteredCourriers = this.courriers;
  }
}
