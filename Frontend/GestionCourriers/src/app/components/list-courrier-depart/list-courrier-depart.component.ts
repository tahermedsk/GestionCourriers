import { Component, OnInit } from '@angular/core';
import { TransmissionCourrier } from 'src/app/models/transmission-courrier';
import { TransmissionCourrierService } from 'src/app/services/transmission-courrier.service';

@Component({
  selector: 'app-list-courrier-depart',
  templateUrl: './list-courrier-depart.component.html',
  styleUrls: ['./list-courrier-depart.component.css']
})
export class ListCourrierDepartComponent implements OnInit {
  courriers: TransmissionCourrier[] = [];

  constructor(private transmissionCourrierService: TransmissionCourrierService) { }

  ngOnInit(): void {
    this.fetchCourriers();
  }

  fetchCourriers() {
    this.transmissionCourrierService.getAllTransmissionCourriers().subscribe(
      (data: TransmissionCourrier[]) => {
        this.courriers = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
