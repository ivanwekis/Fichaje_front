import { Component } from '@angular/core';
import { NavbarModifyUserConfigComponent } from '../navbar-modify-user-config/navbar-modify-user-config.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from '../../../../services/login.services';

@Component({
  selector: 'app-nav-bar-loged',
  templateUrl: './nav-bar-loged.component.html',
  styleUrl: './nav-bar-loged.component.css'
})
export class NavBarLogedComponent {
  name: string;
  current_date: string;
  bsModalRef: BsModalRef;
  constructor(private loginService:LoginService, private modalService: BsModalService) {
    this.current_date = this.getDay();
  }

  ngOnInit(): void {
    this.name = this.loginService.getName();
  }

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
