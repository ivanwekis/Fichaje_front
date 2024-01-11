import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminService } from '../../../services/admin.services';
import { UserData } from '../../models/userdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Input() usersData:UserData[] = [];
  @Input() current_page:number;

  constructor(private adminService: AdminService, private route:Router) { }
  ngOnInit(): void {
    this.current_page = this.adminService.current_page;
  }

  handleClick(filter:string) {
    const searchUser = this.usersData.find(user => user.email === filter || user.name === filter 
      || user.surname === filter || user.username === filter);
    if(searchUser?.username){
      this.adminService.selectedUser = searchUser;
      this.route.navigate(['/admin/user-history']);
    }
    
  }

  paginationEvent(paginationEvent:boolean){
    if(paginationEvent){
      this.current_page = this.adminService.current_page;
    }
  }
}
