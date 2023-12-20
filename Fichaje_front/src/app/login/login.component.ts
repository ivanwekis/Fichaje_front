import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "Martiita99";
  password: string = "jcsuisiosdlks";
  logueado: boolean;

  constructor(private loginService:LoginService, private router:Router) { 
    this.logueado = this.loginService.isLogin();
  }



  login() {

  this.loginService.login(this.username, this.password);
  console.log("Login correcto");
  this.router.navigate(['/']);
  
  this.password = "";
  }
}
