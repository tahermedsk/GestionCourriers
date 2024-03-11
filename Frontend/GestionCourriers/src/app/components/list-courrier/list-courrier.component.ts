import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-courrier',
  templateUrl: './list-courrier.component.html',
  styleUrls: ['./list-courrier.component.css']
})
export class ListCourrierComponent implements OnInit {
  selectedTab: string = 'arrive'; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  showDepartList() {
    this.selectedTab = 'depart';
  }

  showArriveList() {
    this.selectedTab = 'arrive';
  }
}
