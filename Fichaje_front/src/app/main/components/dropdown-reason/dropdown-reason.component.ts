import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-reason',
  templateUrl: './dropdown-reason.component.html',
  styleUrl: './dropdown-reason.component.css'
})
export class DropdownReasonComponent {
  reason: string="-";
  reasons: string[] = ['-','Vacaciones', 'Asuntos propios', 'Festivo','Trámites administrativos','Recuperar horas extras','Baja médica'];
  @Output() reasonChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  reasonChoosen(r: string) {
    this.reason = r;
    this.reasonChange.emit(this.reason);
  }

}
