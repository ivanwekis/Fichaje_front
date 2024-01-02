import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { FicharService } from '../../../services/fichar.services';
import { LoginService } from '../../../services/login.services';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() state: boolean;
  @Input() reason: string;
  @Input() nightShift: boolean;
  showShadow: boolean = false;
  constructor(private ficharService:FicharService, private loginService:LoginService, private registerService:RegisterService) { }


  fichar() {
    this.ficharService.fichar(this.nightShift).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí

        this.registerService.newRegister();
        this.state = true;
        this.stateChange.emit(this.state);

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
    this.ficharService.desfichar(this.reason).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa aquí
        console.log('Ha desfichado correctamente:', response);
        this.registerService.updateRegister();
        this.state = false;
        this.stateChange.emit(this.state);
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
