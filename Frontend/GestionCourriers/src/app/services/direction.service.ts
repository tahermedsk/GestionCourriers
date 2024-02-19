// direction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private apiUrl = 'http://example.com/api/directions'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Obtenir toutes les directions
  getDirections(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.apiUrl);
  }

  // Obtenir une direction par son ID
  getDirectionById(id: number): Observable<Direction> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Direction>(url);
  }

  // Ajouter une nouvelle direction
  addDirection(direction: Direction): Observable<Direction> {
    return this.http.post<Direction>(this.apiUrl, direction);
  }

  // Mettre à jour une direction
  updateDirection(direction: Direction): Observable<Direction> {
    const url = `${this.apiUrl}/${direction.id}`;
    return this.http.put<Direction>(url, direction);
  }

  // Supprimer une direction par son ID
  deleteDirection(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
