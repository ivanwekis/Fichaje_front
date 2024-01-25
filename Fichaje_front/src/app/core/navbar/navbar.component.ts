import { Component } from '@angular/core';
import { LoginService } from '../../services/login.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 
  constructor(private loginService:LoginService) {
  }

  islogin() {
    return this.loginService.isLogin();
  }
}
