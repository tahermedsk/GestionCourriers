import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceptionCourrier } from '../models/reception-courrier';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionCourrierService {
  private url = 'http://localhost:8080/receptioncourriers';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);

    // Create HttpHeaders using the set method
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  }

  getAllReceptionCourriers(): Observable<ReceptionCourrier[]> {
    const headers = this.getHeaders();
    return this.http.get<ReceptionCourrier[]>(this.url, { headers, withCredentials: true });
  }

  getReceptionCourrierById(id: number): Observable<ReceptionCourrier> {
    const headers = this.getHeaders();
    return this.http.get<ReceptionCourrier>(`${this.url}/${id}`, { headers, withCredentials: true });
  }

  createReceptionCourrier(receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {
    
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);
    

    return this.http.post<ReceptionCourrier>(this.url, receptionCourrier, { headers:{'Content-Type':'application/json','Authorization':`Bearer ${jwtToken}`,'Access-Control-Allow-Origin':'*'}});
  }

  updateReceptionCourrier(id: number, receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {
    const headers = this.getHeaders();
    return this.http.put<ReceptionCourrier>(`${this.url}/${id}`, receptionCourrier, { headers });
  }

  deleteReceptionCourrier(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers, withCredentials: true });
  }
}
