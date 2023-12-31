import { Component, Input, ViewChild } from '@angular/core';
import { Register } from '../../../models/register.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModifyRegisterComponent } from '../modify-register/modify-register.component';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrl: './register-table.component.css'
})
export class RegisterTableComponent {

  @Input() registers: Register[];
  bsModalRef: BsModalRef;
  modified: string ;
  constructor(private modalService: BsModalService) { 
    
  }

  ngOnInit(): void {

  }

   // Método para mostrar el modal
   showModal(index: number) {
      const initialState = {
        register: this.registers[index]
      };

      this.bsModalRef = this.modalService.show(ModifyRegisterComponent, { initialState });
  }

}
