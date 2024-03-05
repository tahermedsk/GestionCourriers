import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransmissionCourrier } from '../models/transmission-courrier';

@Injectable({
  providedIn: 'root'
})
export class TransmissionCourrierService {
  private url = '/api/transmission-courriers';

  constructor(private http: HttpClient) { }

  getAllTransmissionCourriers(): Observable<TransmissionCourrier[]> {
    return this.http.get<TransmissionCourrier[]>(this.url);
  }

  getTransmissionCourrierById(id: number): Observable<TransmissionCourrier> {
    return this.http.get<TransmissionCourrier>(`${this.url}/${id}`);
  }

  createTransmissionCourrier(transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {
    return this.http.post<TransmissionCourrier>(this.url, transmissionCourrier);
  }

  updateTransmissionCourrier(id: number, transmissionCourrier: TransmissionCourrier): Observable<TransmissionCourrier> {
    return this.http.put<TransmissionCourrier>(`${this.url}/${id}`, transmissionCourrier);
  }

  deleteTransmissionCourrier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
