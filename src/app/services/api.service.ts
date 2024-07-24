import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api'; // URL base de la API

  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  postData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.apiUrl}/${endpoint}`, data, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
