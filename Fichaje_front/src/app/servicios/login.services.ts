import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';

@Injectable()
export class LoginService {
    private apiUrl = 'http://localhost:8000';
    token:string;

    constructor(private http: HttpClient, private cookie:CookieService) { }

    login(username: string, password: string) {
        const url = `${this.apiUrl}/login`;
        this.http.post(url, { username:username, password:password }).subscribe(
            (response: any) => {
              // Manejar la respuesta exitosa aquí
              console.log('Registrado correctamente:', response.access_token);
              this.token = response.access_token;
              this.cookie.set('token', this.token);
            },
            (error) => {
              // Manejar errores aquí
              console.error('Error en la petición:', error);
            }
          );
      
    }

    getToken() {
      return this.cookie.get('token');
    }

    logout() {
      this.cookie.delete('token');
    }

    isLogin() {
      return this.cookie.check('token');
    }
}
