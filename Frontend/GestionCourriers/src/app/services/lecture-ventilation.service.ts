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


  getAllLectureVentilations(): Observable<LectureVentilation[]> {

    return this.http.get<LectureVentilation[]>(this.url);
  }

  getLectureVentilationById(id: number): Observable<LectureVentilation> {

    return this.http.get<LectureVentilation>(`${this.url}/${id}`);
  }

  createLectureVentilation(lectureVentilation: LectureVentilation): Observable<LectureVentilation> {

    return this.http.post<LectureVentilation>(this.url, lectureVentilation);
  }

  updateLectureVentilation(id: number, lectureVentilation: LectureVentilation): Observable<LectureVentilation> {

    return this.http.put<LectureVentilation>(`${this.url}/${id}`, lectureVentilation);
  }

  deleteLectureVentilation(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
