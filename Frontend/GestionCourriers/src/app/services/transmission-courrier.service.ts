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

  private getHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);

    // Create HttpHeaders using the set method
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  }

  getAllTransmissionCourriers(): Observable<TransmissionCourrier[]> {
    const headers = this.getHeaders();
    return this.http.get<TransmissionCourrier[]>(this.url, { headers });
  }

  getTransmissionCourrierById(id: number): Observable<TransmissionCourrier> {
    const headers = this.getHeaders();
    return this.http.get<TransmissionCourrier>(`${this.url}/${id}`, { headers });
  }

  createTransmissionCourrier(transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {
    const headers = this.getHeaders();
    return this.http.post<TransmissionCourrier>(this.url, transmissionCourrier, { headers });
  }

  updateTransmissionCourrier(id: number, transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {
    const headers = this.getHeaders();
    return this.http.put<TransmissionCourrier>(`${this.url}/${id}`, transmissionCourrier, { headers });
  }

  deleteTransmissionCourrier(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }
}
