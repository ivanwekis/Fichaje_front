import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelos/user.model';
import { LoginService } from './login.services';
import { Register } from '../modelos/register.model';

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
        return this.http.put(url, { "id":register.id, "date":register.date, "start": register.start, "finish":register.finish }, 
        { headers: this.loginService.getAuthHeaders()});
      
    }

}