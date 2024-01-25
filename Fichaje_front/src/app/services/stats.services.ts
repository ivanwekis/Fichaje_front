import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.services';
import { Register } from '../models/register.model';
import { parse } from 'date-fns/parse';
import { getISOWeek } from 'date-fns';


@Injectable({
    providedIn: 'root'
})
export class StatsService {
    private apiUrl = 'http://localhost:8000';
    registers: Register[];
    HoursWorkedPerDay: any = {};
    HoursWorkedPerWeek: any = {};
    data: any = [];
    constructor(private http: HttpClient ,private loginService:LoginService) { }

    getRegistersByUser(dni:string){
        return this.http.get(`${this.apiUrl}/v3/getallregistersbyuser/${dni}`,
        {headers: this.loginService.getAuthHeaders()});
    }

    getHoursWorkedPerWeek(){
        this.data = [];     
        this.registers.forEach(register => {
            let week = this.getWeekoOfTheYear(register.date);
            let HoursWorkedThisDay: number = 0;
            for (let i = 0; i < register.inputs.length; i++) {     
                let input = new Date("1970-01-01 " +register.inputs[i].input);
                if(register.outputs[i].output === "-"){
                    register.outputs[i].output = "18:00:00";
                }
                let output = new Date("1970-01-01 " +register.outputs[i].output);
                let diff = output.getTime() - input.getTime();
                let hours = diff / (1000 * 60 * 60);
                HoursWorkedThisDay += hours;
            }
            this.HoursWorkedPerDay[register.date] = HoursWorkedThisDay;
            if(this.HoursWorkedPerWeek[week] === undefined){
                this.HoursWorkedPerWeek[week] = HoursWorkedThisDay;
            }
            else{
                this.HoursWorkedPerWeek[week] += HoursWorkedThisDay;
            }
        });
        
        for (const [key, value] of Object.entries(this.HoursWorkedPerWeek)) {
            this.data.push({category: key, value: value});
        }
        return this.data;
    }

    getWeekoOfTheYear(dateString: string): number {
        const date = parse(dateString, 'dd/MM/yyyy', new Date());
        const semanaDelAnio = getISOWeek(date);
        return semanaDelAnio;
    }
}