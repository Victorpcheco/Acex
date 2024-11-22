import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/users/login'; // URL da api 

  constructor(private http: HttpClient) {}

  // Método para fazer o login
  login(email: string, senha: string): Observable<any> {
    const body = { email, senha };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, body, { headers });
  }
}
