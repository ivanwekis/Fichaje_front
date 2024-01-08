import { Component, Input} from '@angular/core';
import { SideBarService } from '../../services/sidebar.services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() isSidebarCollapsed = false;
  @Input() father:string;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  constructor(private sidebarService: SideBarService) {}

  ngOnInit(): void {

  }

}
