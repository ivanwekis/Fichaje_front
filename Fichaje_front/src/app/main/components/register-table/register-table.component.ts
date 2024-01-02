import { Component, Input} from '@angular/core';
import { Register } from '../../../models/register.model';
import { BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrl: './register-table.component.css'
})
export class RegisterTableComponent {

  @Input() registers: Register[];
  bsModalRef: BsModalRef;
  isClickable: boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }


}
