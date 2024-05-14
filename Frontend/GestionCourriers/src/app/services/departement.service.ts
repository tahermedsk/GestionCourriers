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

 
  getAllDepartements(): Observable<Departement[]> {

    return this.http.get<Departement[]>(this.url);
  }

  getDepartementById(id: number): Observable<Departement> {

    return this.http.get<Departement>(`${this.url}/${id}`);
  }

  createDepartement(departement: Departement): Observable<Departement> {

    return this.http.post<Departement>(this.url, departement);
  }

  updateDepartement(id: number, departement: Departement): Observable<Departement> {

    return this.http.put<Departement>(`${this.url}/${id}`, departement);
  }

  deleteDepartement(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
