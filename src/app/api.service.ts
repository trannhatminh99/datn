import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = environment.API;
  constructor(private httpClient: HttpClient) { }
  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get<any>(this.apiUrl + url, {params})
      .pipe(
        retry(3), // Retry this request up to 3 times.
        // catchError(this.logService.handleError('get', [])) // Any errors after the 3rd retry will fall through to the app.
      );
  }

  post<T>(url: string, body: any = {}, params?: any): Observable<T> {
    if (typeof body === 'object') {
      body = JSON.stringify(body);
    }
    const options = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params};

    return this.httpClient.post<any>(this.apiUrl + url, body, options);
  }

  put<T>(url: string, body: any = {}, params?: any): Observable<T> {
    if (typeof body === 'object') {
      body = JSON.stringify(body);
    }

    return this.httpClient.put<any>(this.apiUrl + url, body, {params});
  }

  delete<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.delete<any>(this.apiUrl + url, {params});
  }
}
