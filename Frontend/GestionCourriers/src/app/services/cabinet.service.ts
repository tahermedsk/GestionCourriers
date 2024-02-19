import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cabinet } from '../models/cabinet';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private apiUrl = 'http://example.com/api/cabinets'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Get all cabinets
  getCabinets(): Observable<Cabinet[]> {
    return this.http.get<Cabinet[]>(this.apiUrl);
  }

  // Get cabinet by ID
  getCabinetById(id: number): Observable<Cabinet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cabinet>(url);
  }

  // Add new cabinet
  addCabinet(cabinet: Cabinet): Observable<Cabinet> {
    return this.http.post<Cabinet>(this.apiUrl, cabinet);
  }

  // Update cabinet
  updateCabinet(cabinet: Cabinet): Observable<Cabinet> {
    const url = `${this.apiUrl}/${cabinet.id}`;
    return this.http.put<Cabinet>(url, cabinet);
  }

  // Delete cabinet by ID
  deleteCabinet(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
