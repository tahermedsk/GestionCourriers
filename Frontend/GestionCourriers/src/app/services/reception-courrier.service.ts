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



  getAllReceptionCourriers(): Observable<ReceptionCourrier[]> {

    return this.http.get<ReceptionCourrier[]>(this.url);
  }

  getReceptionCourrierById(id: number): Observable<ReceptionCourrier> {

    return this.http.get<ReceptionCourrier>(`${this.url}/${id}`);
  }

  createReceptionCourrier(receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {
    
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);
    
    console.log(receptionCourrier);
    return this.http.post<ReceptionCourrier>(this.url, receptionCourrier, { headers:{'Content-Type':'application/json','Authorization':`Bearer ${jwtToken}`,'Access-Control-Allow-Origin':'*'}});
  }

  updateReceptionCourrier(id: number, receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {

    return this.http.put<ReceptionCourrier>(`${this.url}/${id}`, receptionCourrier);
  }

  deleteReceptionCourrier(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
