import { Component } from '@angular/core';
import { AdminService } from '../services/admin.services';
import { UserData } from './models/userdata.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isSidebarCollapsed = false;
  usersData:UserData[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((data:any) => {
      this.adminService.usersData = data.map((user: UserData) => new UserData(user));
      this.usersData = this.adminService.usersData;
      this.adminService.max_pages = Math.ceil(this.usersData.length / 10);
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  searchEvent(searchEvent:boolean){
    if(searchEvent){
      this.usersData = this.adminService.usersDataFiltered;
    }
    else{
      this.usersData = this.adminService.usersData;
      this.adminService.max_pages = Math.ceil(this.adminService.usersData.length/10);
      console.log(this.usersData);
    }
  }
}
