import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    
    constructor(private loginService:LoginService) {
      this.name = this.loginService.getName();
      this.current_date = this.getDay();
     }
    name: string;
    current_date: string;

    islogin() {
      return this.loginService.isLogin();
    }

    logout() {
      this.loginService.logout();
    }

    getDay = (): string => {
      const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
      const fechaActual = new Date();
      const diaDeLaSemana = diasDeLaSemana[fechaActual.getDay()];
      const diaDelMes = fechaActual.getDate();
      const mes = fechaActual.getMonth() + 1; 
      const año = fechaActual.getFullYear();
    
      const fechaFormateada = `${diaDeLaSemana}, ${diaDelMes}/${mes}/${año}`;
    
      return fechaFormateada;
    };
}
