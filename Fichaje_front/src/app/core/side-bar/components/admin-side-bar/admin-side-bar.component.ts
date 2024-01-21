import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewUserComponent } from '../../../../admin-dashboard/components/add-new-user/add-new-user.component';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  newUser() {
    const initialState = {
    };

    this.bsModalRef = this.modalService.show(AddNewUserComponent, {
      class: 'modal-lg',
       initialState });
  }
}

