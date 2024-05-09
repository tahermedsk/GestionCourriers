import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courrier } from '../models/courrier';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private url = 'http://localhost:8080/courriers';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);

    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  }

  getAllCourriers(): Observable<Courrier[]> {
    const headers = this.getHeaders();
    return this.http.get<Courrier[]>(this.url, { headers });
  }

  getCourrierById(id: number): Observable<Courrier> {
    const headers = this.getHeaders();
    return this.http.get<Courrier>(`${this.url}/${id}`, { headers });
  }

  createCourrier(courrier: Courrier): Observable<Courrier> {
    const headers = this.getHeaders();
    return this.http.post<Courrier>(this.url, courrier, { headers });
  }

  updateCourrier(id: number, courrier: Courrier): Observable<Courrier> {
    const headers = this.getHeaders();
    return this.http.put<Courrier>(`${this.url}/${id}`, courrier, { headers });
  }

  deleteCourrier(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }

  getNombreCourriers(): Observable<number> {
    const headers = this.getHeaders();
    return this.http.get<number>(`${this.url}/count`, { headers });
  }
}
