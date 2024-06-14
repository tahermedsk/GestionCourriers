import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private apiUrl = environment.serverURL + '/archives';

  constructor(private http: HttpClient) { }

  private getHeaders(customHeaders?: { [header: string]: string }): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (customHeaders) {
      for (const [key, value] of Object.entries(customHeaders)) {
        headers = headers.set(key, value);
      }
    }
    return headers;
  }

  getAllArchives(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.getHeaders() });
  }

  getArchiveById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createArchive(archiveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, archiveData, { headers: this.getHeaders() });
  }

  updateArchive(id: number, archiveData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, archiveData, { headers: this.getHeaders() });
  }

  deleteArchive(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/upload', formData, { headers: this.getHeaders() });
  }
}
 