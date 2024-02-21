import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

export interface Links {
  first?: {href: string};
  self?: {href: string};
  next?: {href: string};
  last?: {href: string};
  profile?: {href: string};
  search?: {href: string};
}
export interface ApiResult {
  //[x: string]: string;
  // message?: any;
  page: {
    size?: number;
    totalElements?: number;
    number?: number;
  };
  _embedded: {
    etudiants: any;
    societes? : any;
    departements? : any;
    choixes? : any;
  };
  _links?: Links;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(environment.serverURL + url, data);
  }

  postRessource(url: string, data: any): Observable<ApiResult> {
    return this.http.post<ApiResult>(environment.serverURL + url, data, { headers: this.getHeaders() });
  }

  uploadFiles(url:any, formData: FormData): Observable<any> {
    return this.http.post<any>(environment.serverURL + url, formData);
  }

  postPhoto(url: string, data: any): Observable<any>{
    return this.http.post(environment.serverURL + url, data, { headers: this.getHeaders() });
  }

  patchRessource(url: string, data: any) {
    return this.http.patch<ApiResult>(environment.serverURL + url, data, { headers: this.getHeaders() });
  }

  getRessource(url: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(environment.serverURL + url, { headers: this.getHeaders() });
  }

  getRessourceByUrl(url: string): Observable<ApiResult> {
    return this.http.get<ApiResult>(url, { headers: this.getHeaders() });
  }

  getRessourceAny(url: string): Observable<any> {
    return this.http.get<any>(environment.serverURL + url, { headers: this.getHeaders() });
  }

  getRessourceFile(url: string): Observable<any> {
    return this.http.get(environment.serverURL + url, {
        headers: this.getHeaders(),
        responseType: 'blob' // set the response type to blob
    }).pipe(
        map(res => {
            const blob = new Blob([res], { type: 'application/pdf' }); // create a new blob from the response data
            return URL.createObjectURL(blob); // return the URL of the blob
        })
    );
}

  getRessourceText(url: string): Observable<string> {
    return this.http.get(environment.serverURL +url, { headers: this.getHeaders(), responseType: 'text' });
  }

  getRessourceByParam(url: string, annee: any): Observable<ApiResult> {
    return this.http.get<ApiResult>(environment.serverURL + url + annee, { headers: this.getHeaders() });
  }

  putRessource(url: string, data: any) {
    return this.http.put(url, data, { headers: this.getHeaders({ 'content-type': 'text/uri-list' }) });
  }

  deleteRessource(url: string) {
    return this.http.delete(environment.serverURL + url, { headers: this.getHeaders() });
  }
  
  deleteRessourceByUrl(url: string) {
    return this.http.delete(url, { headers: this.getHeaders() });
  }
  
  private getHeaders(customHeaders?: { [header: string]: string }): HttpHeaders {
    let headers = this.headers;
    const token = localStorage.getItem('access-token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    if (customHeaders) {
      headers = headers.set(Object.keys(customHeaders)[0], Object.values(customHeaders)[0]);
    }
    return headers;
  }
}
