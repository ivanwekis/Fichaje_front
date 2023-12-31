import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { LoginService } from '../../../services/login.services';
import { Register } from '../../../models/register.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  current: number = 2;
  constructor(private registerService: RegisterService, private loginService:LoginService,) {}
  ngOnInit(): void {
  }


  button(current: number) {

    this.registerService.getRegisters(current, this.loginService.user).subscribe(
      (data: any) => {
        console.log('Registros obtenidos correctamente:');
        this.registerService.registers.splice(0, this.registerService.registers.length);
        for (let i = 0; i < data['registers'].length; i++) {
            
            if(data['registers'][i]['modified'] == null){
              data['registers'][i]['modified'] = false;
            }
            
            this.registerService.registers.push(new Register(data['registers'][i]['id'], data['registers'][i]['date'], 
            data['registers'][i]['start'], data['registers'][i]['finish'], data['registers'][i]['modified']));
        }
      },
      (error) => {
        // Manejar errores aquí
        console.log(error);
      }
    );
    if (current <= 1){
     this.current =2; 
    }
    else{
      this.current = current;
    }

  }
}
