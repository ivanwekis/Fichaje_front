import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modelos/user.model';
import { LoginService } from './login.services';

@Injectable({
    providedIn: 'root'
})
export class FicharService {
    private apiUrl = 'http://localhost:8000';

    constructor(private http: HttpClient, private loginService: LoginService) { }

    fichar(user: User) {
        // Aquí puedes realizar la lógica para fichar, por ejemplo, enviar una solicitud POST al servidor
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.loginService.getToken()}`
          });

        return this.http.post(`${this.apiUrl}/v0/fichar`, {username: user.user}, {headers, withCredentials: true});
    }

    desfichar(user: User) {
        // Aquí puedes realizar la lógica para fichar, por ejemplo, enviar una solicitud POST al servidor
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.loginService.getToken()}`
          });
        return this.http.post(`${this.apiUrl}/v0/desfichar`, {username: user.user}, {headers, withCredentials: true});
    }
}
