import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelos/user.model';
import { LoginService } from './login.services';
import { Register } from '../modelos/register.model';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private apiUrl = 'http://localhost:8000';
    registers: Register[];
    currentDay: string;
    currentHour: string;
    constructor(private http: HttpClient, private loginService: LoginService) { 
        this.registers = [];
    }

    getRegisters(page: number , user: User) {
        // Aquí puedes realizar la lógica para fichar, por ejemplo, enviar una solicitud POST al servidor
        
        return this.http.post(`${this.apiUrl}/v2/getregisters/${page}`, {username: user.user}, {headers: this.loginService.getAuthHeaders()});
        
    }

    newRegister(){
        const dateTimeDay = new Date();
        const dateTimeHour = new Date();
        this.currentDay = dateTimeDay.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
        this.currentHour =  dateTimeHour.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
        this.registers.unshift(new Register(this.currentDay,this.currentDay, this.currentHour, "-"));
    }

    updateRegister(){
        const dateTimeHour = new Date();
        this.currentHour =  dateTimeHour.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
        this.registers[0].finish = this.currentHour;
    }

    todayHasRegister(){
        const dateTimeDay = new Date();
        this.currentDay = dateTimeDay.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
        if(this.registers[0].date == this.currentDay){
            if(this.registers[0].finish == "-"){
                return true;
            }
            return false;
        }
        return false;
    }

}
