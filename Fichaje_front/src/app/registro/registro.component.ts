import { Component } from '@angular/core';
import { RegistroService } from '../servicios/registro.services';
import { NewUser } from '../modelos/newuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
    constructor(private registerService:RegistroService, private router:Router) {}
    username:string;
    password:string;
    email:string;
    company:string;
    name:string;
    surname:string;

    registrarUsuario() {
      this.registerService.registrarUsuario(new NewUser(this.username, this.password, this.email, this.company, this.name, this.surname)).subscribe(
        (response:any) => {
          console.log('Registrado correctamente:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error en la petición:', error);
          if (error.status == 400 && error.error.detail == "El nombre de usuario/email ya existe en la BD") {
            alert(error.error.detail);
            this.username = '';
            this.email = '';
          }
          else if (error.status == 422){
            alert('Error en el formulario');
          }
          else{
            alert('Error desconocido');
          }
        }
      );
    }
}
