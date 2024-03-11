import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { AuthService } from './auth.service'; // Assuming you have AuthService for obtaining JWT token

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private url = 'http://localhost:8080/departements';

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

  getAllDepartements(): Observable<Departement[]> {
    const headers = this.getHeaders();
    return this.http.get<Departement[]>(this.url, { headers });
  }

  getDepartementById(id: number): Observable<Departement> {
    const headers = this.getHeaders();
    return this.http.get<Departement>(`${this.url}/${id}`, { headers });
  }

  createDepartement(departement: Departement): Observable<Departement> {
    const headers = this.getHeaders();
    return this.http.post<Departement>(this.url, departement, { headers });
  }

  updateDepartement(id: number, departement: Departement): Observable<Departement> {
    const headers = this.getHeaders();
    return this.http.put<Departement>(`${this.url}/${id}`, departement, { headers });
  }

  deleteDepartement(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }
}
