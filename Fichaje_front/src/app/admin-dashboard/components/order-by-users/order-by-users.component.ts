import { Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../../../services/admin.services';

@Component({
  selector: 'app-order-by-users',
  templateUrl: './order-by-users.component.html',
  styleUrl: './order-by-users.component.css'
})
export class OrderByUsersComponent {
  sortBy=['Nombre','Apellidos','Email'];
  @Output() OrderBy: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private adminService:AdminService) { }

  reasonChoosen(sortFilter:string){
    this.adminService.sortBy(sortFilter);
  }

}
