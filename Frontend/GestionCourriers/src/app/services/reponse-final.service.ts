

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReponseFinal } from '../models/reponse-final';

@Injectable({
  providedIn: 'root'
})
export class ReponseFinalService {
  private apiUrl = 'http://localhost:8080/api/reponses';

  constructor(private http: HttpClient) {}

  getAllReponses(): Observable<ReponseFinal[]> {
    return this.http.get<ReponseFinal[]>(this.apiUrl);
  }

  getReponseById(id: number): Observable<ReponseFinal> {
    return this.http.get<ReponseFinal>(`${this.apiUrl}/${id}`);
  }

  createReponse(reponse: ReponseFinal): Observable<ReponseFinal> {
    return this.http.post<ReponseFinal>(this.apiUrl, reponse);
  }

  deleteReponse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadFile(file: File, copieNote: File, reponse: ReponseFinal): Observable<ReponseFinal> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('copieNote', copieNote);
    formData.append('date', reponse.date);
    formData.append('idReponse', reponse.idReponse);
    formData.append('idCourrier', reponse.idCourrier);
    formData.append('observations', reponse.observations);

    return this.http.post<ReponseFinal>(`${this.apiUrl}/upload`, formData);
  }
}
