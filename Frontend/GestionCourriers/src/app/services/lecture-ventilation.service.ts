import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureVentilation } from '../models/lecture-ventilation';

@Injectable({
  providedIn: 'root'
})
export class LectureVentilationService {
  private url = '/api/lecture-ventilations';

  constructor(private http: HttpClient) { }

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
