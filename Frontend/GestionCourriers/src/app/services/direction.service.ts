import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction';
import { AuthService } from './auth.service'; // Assuming you have AuthService for obtaining JWT token

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private url = 'http://localhost:8080/directions';

  constructor(
    private http: HttpClient,
    private authService: AuthService // Assuming you have AuthService for obtaining JWT token
  ) { }

  private getHeaders(): HttpHeaders {
    const jwtToken = localStorage.getItem('access_token');
    console.log('JWT Token:', jwtToken);

    // Create HttpHeaders using the set method
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`);
  }

  getAllDirections(): Observable<Direction[]> {
    const headers = this.getHeaders();
    return this.http.get<Direction[]>(this.url, { headers });
  }

  getDirectionById(id: number): Observable<Direction> {
    const headers = this.getHeaders();
    return this.http.get<Direction>(`${this.url}/${id}`, { headers });
  }

  createDirection(direction: Direction): Observable<Direction> {
    const headers = this.getHeaders();
    return this.http.post<Direction>(this.url, direction, { headers });
  }

  updateDirection(id: number, direction: Direction): Observable<Direction> {
    const headers = this.getHeaders();
    return this.http.put<Direction>(`${this.url}/${id}`, direction, { headers });
  }

  deleteDirection(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }
}
