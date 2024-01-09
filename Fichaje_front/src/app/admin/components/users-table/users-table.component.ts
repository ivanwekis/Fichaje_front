import { Component, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.services';
import { UserData } from '../../models/userdata.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Input() usersData:UserData[] = [];
  @Input() current_page:number;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.current_page = this.adminService.current_page;
  }

  handleClick(email:string) {
    console.log('Clic en la fila con email:', email);
  }

  paginationEvent(paginationEvent:boolean){
    if(paginationEvent){
      this.current_page = this.adminService.current_page;
    }
  }
}
