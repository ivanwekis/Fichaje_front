import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.services';
import { UserData } from '../admin/models/userdata.model';


@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private apiUrl = 'http://localhost:8000';
    usersData:UserData[] = [];
    
    constructor(private http: HttpClient ,private loginService:LoginService) { }

    getUsers(){
        return this.http.get(`${this.apiUrl}/v3/getusers`, {headers: this.loginService.getAuthHeaders()});
    }

}
