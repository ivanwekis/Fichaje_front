import { Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../../../services/admin.services';

@Component({
  selector: 'app-users-table-pagination',
  templateUrl: './users-table-pagination.component.html',
  styleUrl: './users-table-pagination.component.css'
})
export class UsersTablePaginationComponent {
  current_page = 1;
  max_pages: number;
  @Output() paginationEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private adminService:AdminService) {
    
   }

  ngOnInit(): void {
  }

  button(current_page:number) {
    this.max_pages = this.adminService.max_pages;
    this.current_page = this.adminService.current_page;
    if(current_page <= 0 || current_page > this.max_pages){
      if (current_page >= this.max_pages){
        current_page = this.max_pages-1;
      }
      else{
        current_page = 1;
      }
    }
    this.current_page = current_page;
    this.adminService.current_page = current_page;
    this.paginationEvent.emit(true);
  }
}
