import { Injectable } from "@angular/core";
import { Register } from "../models/register.model";
import { UserData } from "../admin-dashboard/models/userdata.model";
import { LoginService } from "./login.services";
import { HttpClient } from "@angular/common/http";
import { AdminService } from "./admin.services";


@Injectable({
    providedIn: 'root'
})
export class UserHistoryService {
    private apiUrl = 'http://localhost:8000';
    registers: Register[];
    constructor(private http: HttpClient ,private loginService:LoginService, private adminService:AdminService) { }

    getRegistersByUser(user:UserData, page:number){
        return this.http.get(`${this.apiUrl}/v3/getregistersbyuser/${user.dni}/${page}`,
        {headers: this.loginService.getAuthHeaders()});
    }

    modifyRegisterByUser(register: Register){
        return this.http.put(`${this.apiUrl}/v3/modifyregisterbyuser/${this.adminService.selectedUser.dni}`, register,
        {headers: this.loginService.getAuthHeaders()});
    }
}
