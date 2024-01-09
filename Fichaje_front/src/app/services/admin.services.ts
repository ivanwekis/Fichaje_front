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
    usersDataFiltered:UserData[] = [];
    max_pages: number;
    current_page = 1;
    constructor(private http: HttpClient ,private loginService:LoginService) { }

    getUsers(){
        return this.http.get(`${this.apiUrl}/v3/getusers`, {headers: this.loginService.getAuthHeaders()});
    }

    searchUser(searchText:string){
        this.usersDataFiltered.splice(0,this.usersDataFiltered.length);
        this.usersData.forEach(user => {
            if(user.email.includes(searchText) || user.name.includes(searchText) || user.surname.includes(searchText)){
                this.usersDataFiltered.push(user);
            }
        });
        this.max_pages = Math.ceil(this.usersDataFiltered.length / 10);
        this.current_page = 1;
    }

    sortBy(sortFilter:string){
        console.log(sortFilter);
        switch(sortFilter){
            case 'Nombre':
                this.usersData.sort((a,b) => a.name.localeCompare(b.name));
                this.usersDataFiltered.sort((a,b) => a.name.localeCompare(b.name));
                break;
            case 'Apellidos':
                this.usersData.sort((a,b) => a.surname.localeCompare(b.surname));
                this.usersDataFiltered.sort((a,b) => a.surname.localeCompare(b.surname));
                break;
            case 'Email':
                this.usersData.sort((a,b) => a.email.localeCompare(b.email));
                this.usersDataFiltered.sort((a,b) => a.email.localeCompare(b.email));
                break;
        }
    }
}
