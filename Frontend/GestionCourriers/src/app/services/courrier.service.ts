// courrier.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courrier } from '../models/courrier';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private apiUrl = 'http://example.com/api/courriers'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Obtenir tous les courriers
  getCourriers(): Observable<Courrier[]> {
    return this.http.get<Courrier[]>(this.apiUrl);
  }

  // Obtenir un courrier par son ID
  getCourrierById(id: number): Observable<Courrier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Courrier>(url);
  }

  // Ajouter un nouveau courrier
  addCourrier(courrier: Courrier): Observable<Courrier> {
    return this.http.post<Courrier>(this.apiUrl, courrier);
  }

  // Mettre à jour un courrier
  updateCourrier(courrier: Courrier): Observable<Courrier> {
    const url = `${this.apiUrl}/${courrier.id}`;
    return this.http.put<Courrier>(url, courrier);
  }

  // Supprimer un courrier par son ID
  deleteCourrier(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
