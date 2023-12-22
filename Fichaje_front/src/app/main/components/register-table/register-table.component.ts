import { Component, Input } from '@angular/core';
import { Register } from '../../../modelos/register.model';
import { RegisterService } from '../../../servicios/register.service';
import { LoginService } from '../../../servicios/login.services';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrl: './register-table.component.css'
})
export class RegisterTableComponent {

  @Input() registers: Register[];
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

}
