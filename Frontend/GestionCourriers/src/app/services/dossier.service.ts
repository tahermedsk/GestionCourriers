import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dossier } from '../models/dossier';
import { AuthService } from './auth.service'; // Assuming you have AuthService for obtaining JWT token

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private url = 'http://localhost:8080/dossiers';

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

  getAllDossiers(): Observable<Dossier[]> {
    const headers = this.getHeaders();
    return this.http.get<Dossier[]>(this.url, { headers });
  }

  getDossierById(id: number): Observable<Dossier> {
    const headers = this.getHeaders();
    return this.http.get<Dossier>(`${this.url}/${id}`, { headers });
  }

  createDossier(dossier: Dossier): Observable<Dossier> {
    const headers = this.getHeaders();
    return this.http.post<Dossier>(this.url, dossier, { headers });
  }

  updateDossier(id: number, dossier: Dossier): Observable<Dossier> {
    const headers = this.getHeaders();
    return this.http.put<Dossier>(`${this.url}/${id}`, dossier, { headers });
  }

  deleteDossier(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }
}
