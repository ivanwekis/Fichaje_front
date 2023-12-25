import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../modelos/newuser.model';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    private backendUrl = 'http://localhost:8000'; // Cambia esta URL según tu configuración del backend

    constructor(private http: HttpClient) { }

    registrarUsuario(newUser: NewUser) {
        const url = `${this.backendUrl}/v1/create_user`; // Cambia "/registro" por la ruta correcta en tu backend
        return this.http.post(url, {"username": newUser.user, "password": newUser.password, "email": newUser.email, "company": newUser.company, "name": newUser.name, "surname": newUser.surname});
    }
}
