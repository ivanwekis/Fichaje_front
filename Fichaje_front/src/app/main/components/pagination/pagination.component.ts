import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { LoginService } from '../../../services/login.services';
import { Register, Input, Output } from '../../../models/register.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  current: number = 1;
  maxPages: number = 1;
  constructor(private registerService: RegisterService, private loginService:LoginService,) {}

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
      this.registerService.getRegisters(current, this.loginService.user).subscribe(
        (data: any) => {
          console.log('Registros obtenidos correctamente:');
          this.registerService.registers.splice(0, this.registerService.registers.length);
          for (let i = 0; i < data['registers'].length; i++) {
              
            if(data['registers'][i]['modified'] == null){
              data['registers'][i]['modified'] = false;
            }
            this.registerService.registers.push(new Register(data['registers'][i]['string_id'], data['registers'][i]['date'], data['registers'][i]['modified']
            ,data['registers'][i]['nightShift']));
  
            for (let j = 0; j < data['registers'][i]['inputs'].length; j++) {
              this.registerService.registers[i].inputs.push(new Input(data['registers'][i]['inputs'][j]['input']));
            }
            for (let j = 0; j < data['registers'][i]['outputs'].length; j++) {
              this.registerService.registers[i].outputs.push(new Output(data['registers'][i]['outputs'][j]['output'], data['registers'][i]['outputs'][j]['reason']));
            }
          }
        },
        (error) => {
          // Manejar errores aquí
          console.log(error);
        }
      );
      this.current = current; 
    }
  }
}
