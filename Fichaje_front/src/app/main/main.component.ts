import { Component } from '@angular/core';
import { FicharService } from '../servicios/fichar.services';
import { LoginService } from '../servicios/login.services';
import { RegisterService } from '../servicios/register.service';
import { Register } from '../modelos/register.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  state: boolean;
  mostrarSombra: boolean = false;
  registers: Register[];
  constructor(private ficharService:FicharService, private loginService:LoginService, private registerService:RegisterService) { }
  
  ngOnInit(): void {
    this.registerService.getRegisters(this.loginService.user).subscribe(
      (data: any) => {
          console.log('Registros obtenidos correctamente:', data['registers']);
          for (let i = 0; i < data['registers'].length; i++) {
              console.log(data['registers'][i]['date'], data['registers'][i]['start'], data['registers'][i]['finish']);
              this.registerService.registers.push(new Register(data['registers'][i]['date'], data['registers'][i]['start'], data['registers'][i]['finish']));
              if(this.registerService.todayHasRegister()){
                this.state = true;
              }
              else{
                this.state = false;
              }
              this.registers = this.registerService.registers;
          }
        },
          
  );
    
    
  }

  fichar() {
    this.ficharService.fichar(this.loginService.user).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí
        console.log('Ha fichado correctamente:', response);
        this.registerService.newRegister();
        this.state = true;

      },
      (error) => {
        // Manejar errores aquí
        console.error('Error en la petición:', error);
        if(error.status == 400){
          alert("Ya has fichado hoy");
        }
      }
    );
  }

  desfichar() {
    this.ficharService.desfichar(this.loginService.user).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí
        console.log('Ha desfichado correctamente:', response);
        this.registerService.updateRegister();
        this.state = false;
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error en la petición:', error);
      }
    );
  }

  checkState() {
    // Comprobamos en que estado estamos (fichado o no)
    return this.state;
  }

  isLogin() {
    return this.loginService.isLogin();
  }
}
