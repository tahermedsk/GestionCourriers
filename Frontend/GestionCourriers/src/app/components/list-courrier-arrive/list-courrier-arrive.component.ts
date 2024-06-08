import { Component, OnInit } from '@angular/core';
import { ReceptionCourrier } from 'src/app/models/reception-courrier';
import { ReceptionCourrierService } from 'src/app/services/reception-courrier.service';

@Component({
  selector: 'app-list-courrier-arrive',
  templateUrl: './list-courrier-arrive.component.html',
  styleUrls: ['./list-courrier-arrive.component.css']
})
export class ListCourrierArriveComponent implements OnInit {
  courriers: ReceptionCourrier[] = [];

  constructor(private receptionCourrierService: ReceptionCourrierService) { }

  ngOnInit(): void {
    this.fetchCourriers();
  }

  fetchCourriers() {
    this.receptionCourrierService.getAllReceptionCourriers().subscribe(
      (data: ReceptionCourrier[]) => {
        this.courriers = data;
        console.log(this.courriers)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
