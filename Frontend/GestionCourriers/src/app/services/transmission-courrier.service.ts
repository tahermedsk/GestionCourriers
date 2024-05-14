import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransmissionCourrier } from '../models/transmission-courrier';
import { AuthService } from './auth.service'; // Assuming you have AuthService for obtaining JWT token

@Injectable({
  providedIn: 'root'
})
export class TransmissionCourrierService {
  private url = 'http://localhost:8080/transmissioncourriers';

  constructor(
    private http: HttpClient,
    private authService: AuthService // Assuming you have AuthService for obtaining JWT token
  ) { }


  getAllTransmissionCourriers(): Observable<TransmissionCourrier[]> {

    return this.http.get<TransmissionCourrier[]>(this.url);
  }

  getTransmissionCourrierById(id: number): Observable<TransmissionCourrier> {

    return this.http.get<TransmissionCourrier>(`${this.url}/${id}`);
  }

  createTransmissionCourrier(transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {

    return this.http.post<TransmissionCourrier>(this.url, transmissionCourrier);
  }

  updateTransmissionCourrier(id: number, transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {

    return this.http.put<TransmissionCourrier>(`${this.url}/${id}`, transmissionCourrier);
  }

  deleteTransmissionCourrier(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
