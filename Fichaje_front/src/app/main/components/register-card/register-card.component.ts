import { Component, Input } from '@angular/core';
import { Register } from '../../../models/register.model';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.css'
})
export class RegisterCardComponent {
  @Input() register: Register

  constructor() { }

  ngOnInit(): void {
  }

}
