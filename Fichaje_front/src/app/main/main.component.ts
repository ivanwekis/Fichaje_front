import { Component  } from '@angular/core';
import { LoginService } from '../services/login.services';
import { RegisterService } from '../services/register.service';
import { Register, Output, Input} from '../models/register.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  state: boolean;
  registers: Register[];
  nightShift: boolean = false;
  reason: string="-";
  constructor(private loginService:LoginService, private registerService:RegisterService) { }
  
  ngOnInit(): void {
    this.registerService.getRegisters(1, this.loginService.user).subscribe(
      (data: any) => {
          console.log('Registros obtenidos correctamente.');
          for (let i = 0; i < data['registers'].length; i++) {
              
              if(data['registers'][i]['modified'] == null){
                data['registers'][i]['modified'] = false;
              }
              this.registerService.registers.push(new Register(data['registers'][i]['string_id'], data['registers'][i]['date'], data['registers'][i]['modified']
              ,data['registers'][i]['nightShift']));

              for (let j = 0; j < data['registers'][i]['inputs'].length; j++) {
                this.registerService.registers[i].inputs.push(new Input(data['registers'][i]['inputs'][j]['input']));
              }
              for (let j = 0; j < data['registers'][i]['outputs'].length; j++) {
                this.registerService.registers[i].outputs.push(new Output(data['registers'][i]['outputs'][j]['output'], data['registers'][i]['outputs'][j]['reason']));
              }
              this.registers = this.registerService.registers;
          }
          this.state = this.registerService.checkState();
        },      
  );
  const currentTime = new Date();
  currentTime.getHours() >= 20 || currentTime.getHours() <= 4 ? this.nightShift = true : this.nightShift = false;
  }
  
  stateChanger(state: boolean) {
    this.state = state;
  }

  reasonChoosen(reason: string) {
    this.reason = reason;
  }

  checkState() {
    // Comprobamos en que estado estamos (fichado o no)
    return this.state;
  }

  isLogin() {
    return this.loginService.isLogin();
  }

  gradientBackground() {
    const startColor = this.isLogin() ? '#9d9d9d' : '#343a40'; // Color de inicio para login y no login
    const endColor = this.isLogin() ? '#343a40' : '#9d9d9d'; // Color de fin para login y no login
  
    return `linear-gradient(to right bottom, ${startColor}, ${endColor})`;
  }
}
