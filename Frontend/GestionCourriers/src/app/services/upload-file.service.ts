import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) {}


  upload(formData: FormData): Observable<any> {
    console.log(formData);
    return this.http.post(environment.serverURL + '/api/thumbnail-upload', formData);
  }
}
