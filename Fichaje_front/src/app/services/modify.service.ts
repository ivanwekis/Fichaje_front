import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { LoginService } from './login.services';
import { Register } from '../models/register.model';

@Injectable()
export class ModifyRegister {
    private apiUrl = 'http://localhost:8000';
    token:string;
    user: User;
    
    constructor(private http: HttpClient, public loginService:LoginService) {
        this.user = new User();
        this.user.setUser(this.loginService.getUser());
     }

    modifyRegister(register:Register) {
        const url = `${this.apiUrl}/v2/modifyRegister`;
        console.log(register);
        return this.http.put(url, { "string_id":register.string_id, "date":register.date,
         "inputs": register.inputs, "outputs":register.outputs, "modified":register.modified, "nightShift":register.nightShift}, 
        { headers: this.loginService.getAuthHeaders()});
      
    }

}