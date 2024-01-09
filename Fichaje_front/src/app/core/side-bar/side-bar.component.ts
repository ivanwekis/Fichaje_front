import { Component, Input} from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {

  }

}
