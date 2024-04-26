import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {}

  getHeaders(customHeaders?: { [header: string]: string }): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('access_token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (customHeaders) {
      headers = headers.set(Object.keys(customHeaders)[0], Object.values(customHeaders)[0]);
    }
    console.log("lalala")
    return headers;
  }

  upload(formData: FormData): Observable<any> {
    console.log(formData);
    return this.http.post(environment.serverURL + '/api/thumbnail-upload', formData, { 
      headers: this.getHeaders()
    });
  }
}
