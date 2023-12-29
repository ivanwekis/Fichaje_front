import { Component, Input } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { FicharService } from '../../../services/fichar.services';
import { LoginService } from '../../../services/login.services';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  @Input() state: boolean;
  showShadow: boolean = false;
  constructor(private ficharService:FicharService, private loginService:LoginService, private registerService:RegisterService) { }


  fichar() {
    this.ficharService.fichar(this.loginService.user).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí

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


}
