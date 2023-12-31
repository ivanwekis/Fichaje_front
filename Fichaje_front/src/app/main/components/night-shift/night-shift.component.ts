import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-night-shift',
  templateUrl: './night-shift.component.html',
  styleUrl: './night-shift.component.css'
})
export class NightShiftComponent {
    @Input() nightShift: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    
}
