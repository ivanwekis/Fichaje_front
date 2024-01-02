import { Component } from '@angular/core';
import { Register } from '../../../../models/register.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModifyRegister } from '../../../../services/modify.service';



@Component({
  selector: 'app-modify-register',
  templateUrl: './modify-register.component.html',
  styleUrl: './modify-register.component.css'
})
export class ModifyRegisterComponent {

  title: string;
  content: string;
  register: Register;
  start: Date;
  finish: Date;
  finished: boolean = false;
  constructor(private bsModalRef: BsModalRef, private modifyService:ModifyRegister) { }
  
  ngOnInit(): void {
    if(this.register.finish == "-"){
      if(this.isToday(this.register.date)){
        this.finished = false;
      }
      else{
        this.finished = true;
        this.finish = new Date();
      }
      
    }
    else{
      this.finished = true;
      this.finish = this.fromStringToDate(this.register.finish);
    }
    this.start = this.fromStringToDate(this.register.start);
    
  }

  show() {

  }

  save() {
    
    this.register.start = this.format(this.start);
  
    if(this.finished == false){
      this.register.finish = "-";
    }
    else{
      this.register.finish = this.format(this.finish);
    }
    if(this.start < this.finish){

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
    else{
      alert("La hora de entrada no puede ser mayor que la hora de salida.");
    }
  }

  close() {
    this.bsModalRef.hide();
  }
  updateStart(event: any){
    this.start = this.fromStringToDate(event);
  }

  updateFinish(event: any){
    this.finish = this.fromStringToDate(event);
  }
  
  private fromStringToDate(time: string): Date {
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
}
