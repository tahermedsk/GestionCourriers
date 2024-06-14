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


  getAllCourriers(): Observable<Courrier[]> {

    return this.http.get<Courrier[]>(this.url);
  }

  getCourrierById(id: number): Observable<Courrier> {

    return this.http.get<Courrier>(`${this.url}/${id}`);
  }

  createCourrier(courrier: Courrier): Observable<Courrier> {

    return this.http.post<Courrier>(this.url, courrier);
  }

  updateCourrier(id: number, courrier: Courrier): Observable<Courrier> {

    return this.http.put<Courrier>(`${this.url}/${id}`, courrier);
  }

  deleteCourrier(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }

  getNombreCourriers(): Observable<number> {

    return this.http.get<number>(`${this.url}/count`);
  }

  archiveCourrier(id: number): Observable<Courrier> {
    const archiveUrl = `${this.url}/${id}/archive`;
    return this.http.put<Courrier>(archiveUrl, null); // Le corps de la requête peut être null si votre backend ne nécessite pas de corps pour cette opération
  }

  lisCourrier(id: number): Observable<Courrier> {
    const archiveUrl = `${this.url}/${id}/lis`;
    return this.http.put<Courrier>(archiveUrl, null); // Le corps de la requête peut être null si votre backend ne nécessite pas de corps pour cette opération
  }
}
