import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.services';

@Injectable({
    providedIn: 'root'
})
export class FicharService {
    private apiUrl = 'http://localhost:8000';

    constructor(private http: HttpClient, private loginService: LoginService) { }

    fichar(nightShift: boolean) {
        // Aquí puedes realizar la lógica para fichar, por ejemplo, enviar una solicitud POST al servidor
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.loginService.getToken()}`
          });
        console.log("nightShift");
        return this.http.post(`${this.apiUrl}/v0/fichar`, {"nightShift": nightShift}, {headers, withCredentials: true});
    }

    desfichar(reason: string) {
        // Aquí puedes realizar la lógica para fichar, por ejemplo, enviar una solicitud POST al servidor
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.loginService.getToken()}`
          });
        return this.http.post(`${this.apiUrl}/v0/desfichar`, {reason: reason}, {headers, withCredentials: true});
    }
}
