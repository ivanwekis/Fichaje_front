import { Component } from '@angular/core';

import { UserData } from '../../models/userdata.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModifyUser } from '../../models/modifyuser';
import { AdminService } from '../../../services/admin.services';
import { ConfirmationDeleteUserComponent } from '../confirmation-delete-user/confirmation-delete-user.component';

@Component({
  selector: 'app-modify-user-data',
  templateUrl: './modify-user-data.component.html',
  styleUrl: './modify-user-data.component.css'
})
export class ModifyUserDataComponent {
  user: UserData;
  modifyuser: ModifyUser;
  old_username: string;
  old_email: string;
  bsModalRefConfirmation: BsModalRef;
  constructor(private bsModalRef: BsModalRef, private adminService: AdminService, private modalService: BsModalService) { }
  ngOnInit() {
    this.old_username = this.user.username;
    this.old_email = this.user.email;
  }
  modifyUser() {
    console.log(this.old_username);
    if(!this.checkFields()){
      return;
    }
    this.modifyuser = new ModifyUser({
      old_username: this.old_username,
      old_email: this.old_email,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      username: this.user.username,
      phone: this.user.phone,
      company: this.user.company,
      last_register: this.user.last_register,
      role: this.user.role,
      admin_access: this.user.admin_access,
      id: this.user.id
    });
    
    this.adminService.ModifyUserData(this.modifyuser).subscribe(
      data => {
        alert("Usuario modificado correctamente.");
        this.bsModalRef.hide();
      },
      error => {
        alert("Error al modificar el usuario.");
      }
    );
    
  }

  deleteUser() {
    this.bsModalRefConfirmation = this.modalService.show(ConfirmationDeleteUserComponent, {
      initialState: {}
    });
  }

  close(){
    this.bsModalRef.hide();
  }

  checkFields() {
    if (this.user.name.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return false;
    }
    if (this.user.surname.length < 3) {
      alert("Los apellidos deben tener al menos 3 caracteres.");
      return false;
    }
    if (this.user.username.length < 6) {
      alert("El nombre de usuario debe tener al menos 6 caracteres.");
      return false;
    }
    if (this.user.company.length < 3) {
      alert("El nombre de la empresa debe tener al menos 3 caracteres.");
      return false;
    }
    if (this.user.role.length < 2) {
      alert("El rol debe tener al menos 2 caracteres.");
      return false;
    }
    if(this.checkEmail(this.user.email)){
      alert("Email no válido.");
      return false;
    }
    if(this.checkPhone(this.user.phone)){
      alert("Teléfono no válido.");
      return false;
    }
  return true;
  }
  checkPhone(phone:string) {
    const phoneRegex = /^[0-9]{9}$/;
    if (phoneRegex.test(phone)) {
      return true;
    } else {
      return false;
    }
  }
  checkEmail(email:string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  
}

