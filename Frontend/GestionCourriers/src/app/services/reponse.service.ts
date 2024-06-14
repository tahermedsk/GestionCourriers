


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reponse } from '../models/reponse';


@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  private apiUrl = 'http://localhost:8080/reponses';

  constructor(private http: HttpClient) {}

  getAllReponses(): Observable<Reponse[]> {
    return this.http.get<Reponse[]>(this.apiUrl);
  }

  getReponseById(id: number): Observable<Reponse> {
    return this.http.get<Reponse>(`${this.apiUrl}/${id}`);
  }

  createReponse(reponse: Reponse): Observable<Reponse> {
    return this.http.post<Reponse>(this.apiUrl, reponse);
  }

  deleteReponse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadFile(file: File, reponse: Reponse): Observable<Reponse> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('date', reponse.date);
    formData.append('idReponse', reponse.idReponse);
    formData.append('idCourrier', reponse.idCourrier);
    formData.append('observations', reponse.observations);

    return this.http.post<Reponse>(`${this.apiUrl}/upload`, formData);
  }
}
