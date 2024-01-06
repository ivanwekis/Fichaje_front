import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NavbarModifyUserConfigComponent } from './components/navbar-modify-user-config/navbar-modify-user-config.component';
import { LoginService } from '../../services/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    
    constructor(private loginService:LoginService, private modalService: BsModalService) {
      this.name = this.loginService.getName();
      this.current_date = this.getDay();
     }
    name: string;
    current_date: string;
    bsModalRef: BsModalRef;

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

    userConfig() {
      //this.loginService.userConfig();
      this.showUserModal();
    }

    showUserModal() {
      const initialState = {
      };

      this.bsModalRef = this.modalService.show(NavbarModifyUserConfigComponent, { initialState });
  }
}
