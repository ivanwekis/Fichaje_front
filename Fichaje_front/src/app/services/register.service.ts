import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { LoginService } from './login.services';
import { Register, Input, Output } from '../models/register.model';

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
        return this.http.post(`${this.apiUrl}/v2/getregisters/${page}`, {username: user.user}, {headers: this.loginService.getAuthHeaders()});
    }

    gerRegistersLength(){
        return this.http.get(`${this.apiUrl}/v2/getregisterslength`, {headers: this.loginService.getAuthHeaders()});
    }

    newRegister(nightShift: boolean){
        const dateTimeDay = new Date();
        const dateTimeHour = new Date();
        this.currentDay = dateTimeDay.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
        this.currentHour =  dateTimeHour.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
        this.registers.unshift(new Register({"date":this.currentDay,"string_id":this.currentDay, "modified":false, "nightShift":nightShift}));
        this.registers[0].inputs.push(new Input(this.currentHour));
        this.registers[0].outputs.push(new Output("-", "-"));
    }

    updateRegisterEntry(){
        const dateTimeHour = new Date();
        this.currentHour =  dateTimeHour.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
        this.registers[0].inputs.push(new Input(this.currentHour));
        this.registers[0].outputs.push(new Output("-", "-"));
    }

    updateRegisterOut(reason: string){
        const dateTimeHour = new Date();
        this.currentHour =  dateTimeHour.toLocaleTimeString('es-ES', {hour: '2-digit', minute: '2-digit'});
        this.registers[0].outputs.pop();
        this.registers[0].outputs.push(new Output(this.currentHour, reason));
    }

    todayHasRegister(){
        const dateTimeDay = new Date();
        this.currentDay = dateTimeDay.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
        if(this.registers[0].date == this.currentDay){
            if(this.registers[0].outputs[0].output == "-" || this.registers[0].outputs.length >= 1){
                return true;
            }
            return false;
        }
        return false;
    }

    checkState() {
        const dateTimeDay = new Date();
        this.currentDay = dateTimeDay.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });
        if(this.registers[0].date == this.currentDay){
            if(this.registers[0].outputs[this.registers[0].outputs.length-1].output == "-" ){
                return true;
            }
            return false;
        }
        else{
            return false;
        }
    }

    searchRegisters(searchText: string){
        return this.http.get(`${this.apiUrl}/v2/searchregisters/${searchText}`, {headers: this.loginService.getAuthHeaders()});
    }

}
