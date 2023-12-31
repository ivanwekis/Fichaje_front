import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.services';
import { ModifyUser } from '../models/modifyUser.model';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {
    private backendUrl = 'http://localhost:8000'; 

    constructor(private http: HttpClient, private loginService: LoginService) { }

    getUserInfo() {
        const url = `${this.backendUrl}/v2/getuserinfo`; 
        return this.http.get(url, {headers: this.loginService.getAuthHeaders()});
    }


    modifyUserInfo(modifyUser: ModifyUser) {
        const url = `${this.backendUrl}/v2/modifyuserinfo`;
        return this.http.put(url, modifyUser, {headers: this.loginService.getAuthHeaders()});
    }
}
