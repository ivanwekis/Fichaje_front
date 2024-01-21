import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NewUser } from '../../../admin-dashboard/models/newuser.model';
import { AdminService } from '../../../services/admin.services';
import { UserData } from '../../models/userdata.model';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css'
})
export class AddNewUserComponent {
  newUser: NewUser=new NewUser("","","","","","","",false);
  constructor(private bsModalRef: BsModalRef, private adminService: AdminService) { } 
  close() {
    this.bsModalRef.hide();
  }

  AddNewUser() {
    if(!this.checkFields()){
      return;
    }
    this.adminService.AddNewUser(this.newUser).subscribe(
      (response: any) => {
        alert("Usuario añadido satisfactoriamente.");
        const user = new UserData({});
        user.name = this.newUser.name;
        user.surname = this.newUser.surname;
        user.username = this.newUser.username;
        user.email = this.newUser.email;
        user.phone = this.newUser.phone;
        user.company = this.newUser.company;
        user.role = this.newUser.role;
        user.admin_access = this.newUser.admin_access;
        this.adminService.usersData.push(user);
        this.bsModalRef.hide();
      },
      (error) => {
        if(error.error.detail.includes("username or email already exists")){
          alert("El nombre de usuario o el email ya existen.");
          return;
        }
        else{
          alert("Error al añadir el usuario.");
          return;
        }
      }
    );
  }

  checkFields() {
    if (this.newUser.name.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return false;
    }
    if (this.newUser.surname.length < 3) {
      alert("Los apellidos deben tener al menos 3 caracteres.");
      return false;
    }
    if (this.newUser.username.length < 6) {
      alert("El nombre de usuario debe tener al menos 6 caracteres.");
      return false;
    }
    if (this.newUser.company.length < 3) {
      alert("El nombre de la empresa debe tener al menos 3 caracteres.");
      return false;
    }
    if (this.newUser.role.length < 2) {
      alert("El rol debe tener al menos 2 caracteres.");
      return false;
    }
    if(this.checkEmail(this.newUser.email)){
      alert("Email no válido.");
      return false;
    }
    if(this.checkPhone(this.newUser.phone)){
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
