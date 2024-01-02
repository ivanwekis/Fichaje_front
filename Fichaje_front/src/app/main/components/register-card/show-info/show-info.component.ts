import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Register } from '../../../../models/register.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.css'
})
export class ShowInfoComponent {
  register: Register;
  constructor(private bsModalRef: BsModalRef) { }
  
  close() {
    this.bsModalRef.hide();
  }
}
