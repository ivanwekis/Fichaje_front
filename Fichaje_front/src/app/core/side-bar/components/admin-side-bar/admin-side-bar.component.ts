import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddNewUserComponent } from '../../../../admin-dashboard/components/add-new-user/add-new-user.component';
import { LoginService } from '../../../../services/login.services';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrl: './admin-side-bar.component.css'
})
export class AdminSideBarComponent {
  bsModalRef: BsModalRef;
  AdminDni: any;
  constructor(private modalService: BsModalService, private loginService: LoginService) {
    this.AdminDni = this.loginService.getDni();
   }

  newUser() {
    const initialState = {
    };

    this.bsModalRef = this.modalService.show(AddNewUserComponent, {
      class: 'modal-lg',
       initialState });
  }
}

