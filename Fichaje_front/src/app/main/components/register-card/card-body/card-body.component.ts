import { Component, Input } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModifyRegisterComponent } from '../modify-register/modify-register.component';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.css'
})
export class CardBodyComponent {
  @Input() register: Register

  bsModalRef: BsModalRef;
  isClickable: boolean = false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(){

  }

  showModal() {
    const initialState = {
      register: this.register
    };
    this.bsModalRef = this.modalService.show(ModifyRegisterComponent, { initialState });
  }

  
  
}
