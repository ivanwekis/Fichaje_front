import { Component, Input } from '@angular/core';
import { AdminService } from '../../../services/admin.services';
import { UserData } from '../../models/userdata.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModifyUserDataComponent } from '../modify-user-data/modify-user-data.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  @Input() usersData:UserData[] = [];
  @Input() current_page:number;
  bsModalRef: BsModalRef;
  constructor(private adminService: AdminService, private route:Router, private modalService: BsModalService) { }
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

  modifyUser(username:string){
    console.log(username)
    const searchUserData = this.usersData.find(user => user.username === username);
    if(searchUserData?.username){
      this.adminService.selectedUser = searchUserData;
      console.log(searchUserData)
      const initialState = {
        user: searchUserData
      };
      this.bsModalRef = this.modalService.show(ModifyUserDataComponent, {
        class: 'modal-lg',
        initialState });
    }
    
  }

  paginationEvent(paginationEvent:boolean){
    if(paginationEvent){
      this.current_page = this.adminService.current_page;
    }
  }
}
