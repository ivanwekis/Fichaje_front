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

  constructor(private loginService:LoginService, private router:Router) { 

  }
  ngOnInit(): void {
    if(this.loginService.isLogin()){
      this.router.navigate(['/fichaje']);
    }
  }


  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí
        console.log('Registrado correctamente:', response.access_token);
        this.loginService.token = response.access_token;
        this.loginService.user.setUser(this.username);
        this.loginService.cookie.set('token', this.loginService.token);
        this.loginService.cookie.set('user', this.loginService.user.getUser());
        this.router.navigate(['/fichaje']);
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error en la petición:', error);
        alert("Error en el login. Comprueba que los datos son correctos.");
      }
    );
    
    this.password = "";
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
