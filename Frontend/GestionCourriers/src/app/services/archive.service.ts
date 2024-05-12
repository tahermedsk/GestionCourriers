import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private apiUrl = 'http://localhost:8080/api/archives';

  constructor(private http: HttpClient) { }

  getAllArchives(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getArchiveById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createArchive(archiveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, archiveData);
  }

  updateArchive(id: number, archiveData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, archiveData);
  }

  deleteArchive(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }
}
