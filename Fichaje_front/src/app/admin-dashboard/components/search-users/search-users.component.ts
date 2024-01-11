import { Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../../../services/admin.services';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrl: './search-users.component.css'
})
export class SearchUsersComponent {
  searchText:string = '';
  @Output() searchEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private adminService:AdminService) { }

  searchUser(searchText:string){
    if(searchText.length == 0){
      this.adminService.usersDataFiltered.splice(0,this.adminService.usersDataFiltered.length);
      this.searchEvent.emit(false);
    }
    else{
      this.adminService.searchUser(searchText);
      this.searchEvent.emit(true);
    }
  }
}
