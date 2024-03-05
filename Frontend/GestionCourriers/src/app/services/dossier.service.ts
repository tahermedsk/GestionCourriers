import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dossier } from '../models/dossier';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private url = '/api/dossiers';

  constructor(private http: HttpClient) { }

  getAllDossiers(): Observable<Dossier[]> {
    return this.http.get<Dossier[]>(this.url);
  }

  getDossierById(id: number): Observable<Dossier> {
    return this.http.get<Dossier>(`${this.url}/${id}`);
  }

  createDossier(dossier: Dossier): Observable<Dossier> {
    return this.http.post<Dossier>(this.url, dossier);
  }

  updateDossier(id: number, dossier: Dossier): Observable<Dossier> {
    return this.http.put<Dossier>(`${this.url}/${id}`, dossier);
  }

  deleteDossier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
