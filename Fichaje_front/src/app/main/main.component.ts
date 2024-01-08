import { Component  } from '@angular/core';
import { LoginService } from '../services/login.services';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register.model';
import { SideBarService } from '../services/sidebar.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  state: boolean;
  registers: Register[];
  nightShift: boolean = false;
  reason: string="-";
  isSidebarCollapsed = false;
  adminPermission: boolean = true;

  
  constructor(private loginService:LoginService, private registerService:RegisterService) { }
  
  ngOnInit(): void {
    this.registers = this.registerService.registers;
    this.state = this.registerService.checkState();
    const currentTime = new Date();
    currentTime.getHours() >= 20 || currentTime.getHours() <= 4 ? this.nightShift = true : this.nightShift = false;
    this.adminPermission = this.loginService.isAdmin();
  }

  stateChanger(state: boolean) {
    this.state = state;
  }

  reasonChoosen(reason: string) {
    this.reason = reason;
  }

  checkState() {
    // Comprobamos en que estado estamos (fichado o no)
    return this.state;
  }

  isLogin() {
    return this.loginService.isLogin();
  }

  gradientBackground() {
    const startColor = this.isLogin() ? '#9d9d9d' : '#343a40'; // Color de inicio para login y no login
    const endColor = this.isLogin() ? '#343a40' : '#9d9d9d'; // Color de fin para login y no login
  
    return `linear-gradient(to right bottom, ${startColor}, ${endColor})`;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
