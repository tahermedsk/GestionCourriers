import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReceptionCourrier } from '../models/reception-courrier';

@Injectable({
  providedIn: 'root'
})
export class ReceptionCourrierService {
  private url = '/api/reception-courriers';

  constructor(private http: HttpClient) { }

  getAllReceptionCourriers(): Observable<ReceptionCourrier[]> {
    return this.http.get<ReceptionCourrier[]>(this.url);
  }

  getReceptionCourrierById(id: number): Observable<ReceptionCourrier> {
    return this.http.get<ReceptionCourrier>(`${this.url}/${id}`);
  }

  createReceptionCourrier(receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {
    return this.http.post<ReceptionCourrier>(this.url, receptionCourrier);
  }

  updateReceptionCourrier(id: number, receptionCourrier: ReceptionCourrier): Observable<ReceptionCourrier> {
    return this.http.put<ReceptionCourrier>(`${this.url}/${id}`, receptionCourrier);
  }

  deleteReceptionCourrier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
