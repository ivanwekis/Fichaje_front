import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AdminService } from '../services/admin.services';
import { Register } from '../models/register.model';
import { Router } from '@angular/router';
import { UserHistoryService } from '../services/user-history.service';


@Component({
  selector: 'app-user-history',
  templateUrl: './admin-user-register-history.component.html',
  styleUrl: './admin-user-register-history.component.css'
})
export class AdminUserRegisterHistoryComponent {
  isSidebarCollapsed = false;
  registers:Register[] = this.userHistory.registers;

  constructor(private adminService:AdminService, private router:Router, private userHistory:UserHistoryService) {}

  ngOnInit(): void {
    if (this.adminService.selectedUser.username === ""){
      alert("No se ha seleccionado ningún usuario");
      this.router.navigate(['/admin/dashboard']);
    }
    else{
      this.userHistory.getRegistersByUser(this.adminService.selectedUser, 1).subscribe(
        (data: any) => {
          this.userHistory.registers = data.registers.map((register: Register) => new Register(register));
          console.log(this.userHistory.registers);
          this.registers = this.userHistory.registers;
        });
    }
  }

}
