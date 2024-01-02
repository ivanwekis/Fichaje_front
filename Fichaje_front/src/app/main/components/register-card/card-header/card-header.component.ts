import { Component, Input } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModifyRegisterComponent } from '../modify-register/modify-register.component';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css'
})
export class CardHeaderComponent {
  @Input() register: Register
  bsModalRef: BsModalRef;
  isClickable: boolean = false;

  constructor(private modalService: BsModalService) { }

  showModal() {
    const initialState = {
      register: this.register
    };

    this.bsModalRef = this.modalService.show(ModifyRegisterComponent, { initialState });
}
}
