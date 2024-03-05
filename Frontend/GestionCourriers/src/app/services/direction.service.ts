import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private url = '/api/directions';

  constructor(private http: HttpClient) { }

  getAllDirections(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.url);
  }

  getDirectionById(id: number): Observable<Direction> {
    return this.http.get<Direction>(`${this.url}/${id}`);
  }

  createDirection(direction: Direction): Observable<Direction> {
    return this.http.post<Direction>(this.url, direction);
  }

  updateDirection(id: number, direction: Direction): Observable<Direction> {
    return this.http.put<Direction>(`${this.url}/${id}`, direction);
  }

  deleteDirection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
