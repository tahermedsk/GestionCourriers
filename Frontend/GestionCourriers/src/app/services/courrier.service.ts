import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courrier } from '../models/courrier';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private url = '/api/courriers';

  constructor(private http: HttpClient) { }

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
}
