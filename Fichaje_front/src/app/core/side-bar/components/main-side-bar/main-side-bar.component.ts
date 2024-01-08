import { Component } from '@angular/core';
import { RegisterService } from '../../../../services/register.service';
import { Register } from '../../../../models/register.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-main-side-bar',
  templateUrl: './main-side-bar.component.html',
  styleUrl: './main-side-bar.component.css'
})
export class MainSideBarComponent {
  registers: Register[];
  searchText: string='';
  constructor(private registerService: RegisterService) {}

  searchButton() {
    if (this.searchText === '') {
      this.registers = [];
    }
    else{
      this.registerService.searchRegisters(this.searchText).pipe().subscribe(
        (data: any) => {
          console.log('Registros obtenidos correctamente.');
          this.registers = data.registers.map((register: Register) => new Register(register));
          this.searchText = '';
        });
    }
  }
}
