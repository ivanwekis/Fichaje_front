import { Component} from '@angular/core';
import { LoginService } from '../services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any = "ivanmorenomoreno";
  password: any = "IvanMoreno1@";
  constructor(private loginService:LoginService, private router:Router) { 

  }
  ngOnInit(): void {
    if(this.loginService.isLogin()){
      console.log("Ya estás logueado");
      this.router.navigate(['/fichaje']);
    }
  }


  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí
        this.loginService.token = response.access_token;
        this.loginService.user.setUser(this.username);
        this.loginService.cookie.set('token', this.loginService.token, 30);
        this.loginService.cookie.set('user', this.loginService.user.getUser(), 30);
        this.loginService.cookie.set('name', response.name, 30);
        this.loginService.cookie.set('dni', response.dni, 30);
        if(response.admin_access == true){
          this.loginService.cookie.set('admin', "true", 30);
        }
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
    this.loginService.logout();   
  }
}
