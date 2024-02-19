// departement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  private apiUrl = 'http://example.com/api/departements'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Obtenir tous les départements
  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(this.apiUrl);
  }

  // Obtenir un département par son ID
  getDepartementById(id: number): Observable<Departement> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Departement>(url);
  }

  // Ajouter un nouveau département
  addDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(this.apiUrl, departement);
  }

  // Mettre à jour un département
  updateDepartement(departement: Departement): Observable<Departement> {
    const url = `${this.apiUrl}/${departement.id}`;
    return this.http.put<Departement>(url, departement);
  }

  // Supprimer un département par son ID
  deleteDepartement(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
