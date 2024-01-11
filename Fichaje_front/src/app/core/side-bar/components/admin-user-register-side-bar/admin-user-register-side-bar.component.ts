import { Component } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { AdminService } from '../../../../services/admin.services';
import { UserData } from '../../../../admin-dashboard/models/userdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-register-side-bar',
  templateUrl: './admin-user-register-side-bar.component.html',
  styleUrl: './admin-user-register-side-bar.component.css'
})
export class AdminUserRegisterSideBarComponent {
  registers: Register[];
  searchText: string='';
  constructor(private adminService:AdminService, private router:Router) {}

  searchButton() {
    if (this.searchText === '') {
      this.registers = [];
    }
    else{
      this.adminService.searchRegistersForUser(this.searchText).pipe().subscribe(
        (data: any) => {
          console.log('Registros obtenidos correctamente.');
          this.registers = data.registers.map((register: Register) => new Register(register));
          this.searchText = '';
        });
    }
  }

  comeBack() {
    this.adminService.selectedUser = new UserData({email:""});
    this.router.navigate(['/admin/dashboard']);
  }
}
