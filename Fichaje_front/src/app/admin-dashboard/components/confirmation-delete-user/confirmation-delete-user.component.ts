import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminService } from '../../../services/admin.services';

@Component({
  selector: 'app-confirmation-delete-user',
  templateUrl: './confirmation-delete-user.component.html',
  styleUrl: './confirmation-delete-user.component.css'
})
export class ConfirmationDeleteUserComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  message: string = '¿Estás seguro de que quieres borrar este usuario?';
  constructor(private bsModalRef: BsModalRef, private adminService: AdminService) { }
  confirm() {
    this.adminService.DeleteUser(this.adminService.selectedUser.dni).subscribe(
      data => {
        this.adminService.usersData.splice(this.adminService.usersData.indexOf(this.adminService.selectedUser), 1);
        alert("Usuario borrado correctamente.");
      },
      error => {
        alert("Error al borrar el usuario.");
      }
    );
    this.bsModalRef.hide();
  }

  cancel() {
    this.bsModalRef.hide();
  }
}
