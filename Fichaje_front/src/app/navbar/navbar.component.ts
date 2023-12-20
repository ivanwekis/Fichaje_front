import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    
    constructor(private loginService:LoginService) {
       this.loginService.logout();
     }

    islogin() {
      return this.loginService.isLogin();
    }
}
