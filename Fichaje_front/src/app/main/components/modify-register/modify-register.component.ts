import { Component } from '@angular/core';
import { Register } from '../../../models/register.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModifyRegister } from '../../../services/modify.service';



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
      this.finished = false;
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
          // Manejar la respuesta del servicio aquí
          this.register.modified = true;
          this.close();
          
        },
        (error) => {
          // Manejar el error del servicio aquí
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
    // Validar que la cadena sea válida
    if (!time || typeof time !== 'string' || !/^\d{2}:\d{2}$/.test(time)) {
      // Devolver un valor por defecto o lanzar una excepción según tus necesidades
      throw new Error('Formato de tiempo no válido');
    }

    // Extraer horas y minutos de la cadena
    const [hours, minutes] = time.split(':');
  
    // Crear un nuevo objeto Date y establecer la hora
    const currentTime = new Date();
    currentTime.setHours(Number(hours)+1);
    currentTime.setMinutes(Number(minutes));
  
    return currentTime;
  }
  

  format(date: Date): string {
    // Función para formatear la hora y minutos en formato "HH:mm"
    return date.toISOString().slice(11, 16);
  }


}
