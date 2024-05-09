import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureVentilation } from '../models/lecture-ventilation';
import { AuthService } from './auth.service'; // Assuming you have AuthService for obtaining JWT token

@Injectable({
  providedIn: 'root'
})
export class LectureVentilationService {
  private url = 'http://localhost:8080/lectureventilations';

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

  getAllLectureVentilations(): Observable<LectureVentilation[]> {
    const headers = this.getHeaders();
    return this.http.get<LectureVentilation[]>(this.url, { headers });
  }

  getLectureVentilationById(id: number): Observable<LectureVentilation> {
    const headers = this.getHeaders();
    return this.http.get<LectureVentilation>(`${this.url}/${id}`, { headers });
  }

  createLectureVentilation(lectureVentilation: LectureVentilation): Observable<LectureVentilation> {
    const headers = this.getHeaders();
    return this.http.post<LectureVentilation>(this.url, lectureVentilation, { headers });
  }

  updateLectureVentilation(id: number, lectureVentilation: LectureVentilation): Observable<LectureVentilation> {
    const headers = this.getHeaders();
    return this.http.put<LectureVentilation>(`${this.url}/${id}`, lectureVentilation, { headers });
  }

  deleteLectureVentilation(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.url}/${id}`, { headers });
  }
}
