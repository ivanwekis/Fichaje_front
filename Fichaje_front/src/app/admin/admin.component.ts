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
  sortBy=['Nombre','Apellidos','Email']
  usersData:UserData[] = []
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe((data:any) => {
      
      this.adminService.usersData = data.map((user: UserData) => new UserData(user));
      this.usersData = this.adminService.usersData;
      console.log(this.usersData);
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  reasonChoosen(r:string){
    console.log(r);
  }
}
