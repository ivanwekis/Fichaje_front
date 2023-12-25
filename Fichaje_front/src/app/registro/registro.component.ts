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
    repassword:string;
    email:string;
    company:string;
    name:string;
    surname:string;
    conditions:boolean = false;

    registrarUsuario() {
      if(this.checkParams(this.username, this.password, this.repassword, this.email, this.company, this.name, this.surname)){
        this.registerService.registrarUsuario(new NewUser(this.name, this.surname, this.username, this.email, this.password, this.company)).subscribe(
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

    checkParams(username:string, password:string, repassword:string, email:string, company:string, name:string, surname:string){
      if (username == '' || password == '' || repassword == '' || email == '' || company == '' || name == '' || surname == ''){
        alert('Rellena todos los campos');
        return false;
        
      }
      else if (password != repassword){
        alert('Las contraseñas no coinciden');
        this.password = '';
        this.repassword = '';
        return false;
      }
      else if (!this.validateEmail(email)){
        alert('El email no es válido');
        return false;
      }
      else if (!this.conditions){
        alert('Debes aceptar las condiciones.');
        return false;
      }
      return true;
    }

    validateEmail(email:string) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
}
