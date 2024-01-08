import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { LoginService } from '../../../services/login.services';
import { Register, Input, Output } from '../../../models/register.model';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  current: number = 1;
  maxPages: number = 1;
  constructor(private registerService: RegisterService, private loginService:LoginService) {}

  ngOnInit(): void {

    this.registerService.gerRegistersLength().subscribe(
      (data: any) => {
        this.maxPages = Math.ceil(data['registers_length']/12);
      },
      (error) => {
        // Manejar errores aquí
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
      this.registerService.getRegisters(current, this.loginService.user).pipe(catchError(error => {console.log(error); return EMPTY})).subscribe(
        (data: any) => {
          
          this.registerService.registers.splice(0, this.registerService.registers.length);
          for (let i = 0; i < data.registers.length; i++) {
            this.registerService.registers.push(new Register(data.registers[i]));
          }
          //this.registerService.registers = data.registers.map((register: Register) => new Register(register));
        }
      );
      this.current = current; 
    }
  }
}
