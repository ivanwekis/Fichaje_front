import { Component } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModifyRegister } from '../../../../services/modify.service';
import { UserHistoryService } from '../../../../services/user-history.service';
import { LoginService } from '../../../../services/login.services';



@Component({
  selector: 'app-modify-register',
  templateUrl: './modify-register.component.html',
  styleUrl: './modify-register.component.css'
})
export class ModifyRegisterComponent {

  title: string;
  content: string;
  register: Register;
  input_list: Date[]= [];
  output_list: Date[] = [];
  finished: boolean[] = [];
  constructor(private bsModalRef: BsModalRef, private modifyService:ModifyRegister,
     private loginService:LoginService ,private userHistory: UserHistoryService) { }
  
  ngOnInit(): void {
    for(let i=0; this.register.inputs.length > i; i++){
      this.input_list.push(this.fromStringToDate(this.register.inputs[i].input));
      
      if(this.register.outputs[i].output == "-"){
        if(this.isToday(this.register.date)){
          this.finished.push(false);
        }
        else{
          this.finished.push(true);
          this.output_list.push(this.fromStringToDate("20:00"));
        }
      }
      else{
        this.output_list.push(this.fromStringToDate(this.register.outputs[i].output));
        this.finished.push(true);
      }
    }
  }

  show() {

  }

  save() {

    if(!this.checkRegistersBeforeSaving() && !this.register.nightShift){
      return;
    }

    for(let i=0; this.register.inputs.length > i; i++){
      this.register.inputs[i].input = this.format(this.input_list[i]);
      if(this.finished[i]){
        this.register.outputs[i].output = this.format(this.output_list[i]);
      }
    }
    if(this.loginService.isAdmin()){
      this.userHistory.modifyRegisterByUser(this.register).subscribe(
        (response) => {
          this.register.modified = true;
          this.close();
          
        },
        (error) => {
          if(error.status == 404){
            alert("No se ha podido modificar el registro por que no se encuentra en la base de datos.");
            this.close();
          }
          else{
            alert("Ha ocurrido un error al modificar el registro.");
            this.close();
          }
        }
      );
    }
    else{
      this.modifyService.modifyRegister(this.register).subscribe(
        (response) => {
          this.register.modified = true;
          this.close();
          
        },
        (error) => {
          if(error.status == 404){
            alert("No se ha podido modificar el registro por que no se encuentra en la base de datos.");
            this.close();
          }
          else{
            alert("Ha ocurrido un error al modificar el registro.");
            this.close();
          }
        }
      );
    }
    
  }

  close() {
    this.bsModalRef.hide();
  }
  updateInput(event: any, index: number){
    this.input_list[index] = this.fromStringToDate(event);
  }

  updateOutput(event: any, index: number){
    this.output_list[index] = this.fromStringToDate(event);
  }
  
  private fromStringToDate(time: string): Date {
    console.log(time);
    if (!time || typeof time !== 'string' || !/^\d{2}:\d{2}$/.test(time)) {
      throw new Error('Formato de tiempo no válido');
    }
    const [hours, minutes] = time.split(':');

    const currentTime = new Date();
    currentTime.setHours(Number(hours)+1);
    currentTime.setMinutes(Number(minutes));
  
    return currentTime;
  }
  

  format(date: Date): string {
    return date.toISOString().slice(11, 16);
  }

  isToday(dateString: string): boolean {
    const currentDate = new Date();
    const [day, month, year] = dateString.split('/').map(Number);
    const dateGet = new Date(year, month - 1, day);
  
    return (
      currentDate.getDate() === dateGet.getDate() &&
      currentDate.getMonth() === dateGet.getMonth() &&
      currentDate.getFullYear() === dateGet.getFullYear()
    );
  }

  checkRegistersBeforeSaving(): boolean{
    for(let i=0; this.register.inputs.length > i; i++){
      if(this.input_list[i] > this.output_list[i] && this.finished[i]){
        alert("La hora de entrada no puede ser mayor que la de salida.");
        return false;
      }
    }
    const currentUTC = new Date();
    currentUTC.setHours(currentUTC.getUTCHours() + 2);
    if(this.isToday(this.register.date)){
      for(let i=0; this.register.inputs.length > i; i++){
        if(this.input_list[i] > currentUTC && this.finished[i]){
          alert("La hora de entrada no puede ser mayor que la hora actual.");
          return false;
        }
        if(this.output_list[i] > currentUTC && this.finished[i]){
          console.log(this.output_list[i]);
          console.log(currentUTC);
          alert("La hora de salida no puede ser mayor que la hora actual.");
          return false;
        }
      }
    }
    return true;
  }
}
