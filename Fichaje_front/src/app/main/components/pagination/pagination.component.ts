import { ChangeDetectorRef, Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { LoginService } from '../../../services/login.services';
import { Register, Input, Output } from '../../../models/register.model';
import { EMPTY, catchError } from 'rxjs';
import { AdminService } from '../../../services/admin.services';
import { UserHistoryService } from '../../../services/user-history.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  current: number = 1;
  maxPages: number = 1;
  constructor(private registerService: RegisterService, private loginService:LoginService,
    private adminService:AdminService, private userHistory:UserHistoryService) {}

  ngOnInit(): void {

    this.registerService.gerRegistersLength().subscribe(
      (data: any) => {
        this.maxPages = Math.ceil(data['registers_length']/12);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  button(current: number) {
    if(current <= 0 || current > this.maxPages){
      if (current >= this.maxPages){
        current = this.maxPages-1;
      }
      else{
        current = 1;
      }
      alert("Has llegado al límite. No hay más registros.");
    }
    else{
      if (this.loginService.isAdmin() && this.adminService.selectedUser.email != ""){
        this.userHistory.getRegistersByUser(this.adminService.selectedUser,current).pipe(catchError(error => {console.log(error); return EMPTY})).subscribe(
          (data: any) => {
            this.userHistory.registers.splice(0, this.registerService.registers.length);
            for (let i = 0; i < data.registers.length; i++) {
              this.userHistory.registers.push(new Register(data.registers[i]));
            }
          }
        );
        this.current = current; 
      }
      else{
        this.registerService.getRegisters(current, this.loginService.user).pipe(catchError(error => {console.log(error); return EMPTY})).subscribe(
          (data: any) => {
            this.registerService.registers.splice(0, this.registerService.registers.length);
            for (let i = 0; i < data.registers.length; i++) {
              this.registerService.registers.push(new Register(data.registers[i]));
            }
          }
        );
        this.current = current; 
      }
    }
  }
}