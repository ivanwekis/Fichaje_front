import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    private apiUrl = 'http://localhost:8000';
    token:string;
    user: User;
    
    constructor(private http: HttpClient, public cookie:CookieService, private router: Router) {
      this.user = new User();
      this.user.setUser(this.getUser());
     }

    login(username: string, password: string) {
        const url = `${this.apiUrl}/login`;
        return this.http.post(url, { username:username, password:password })
      
    }

    getToken() {
      return this.cookie.get('token');
    }

    logout() {
      this.cookie.delete('token');
      this.cookie.delete('user');
      this.cookie.delete('admin');
      this.cookie.delete('name');
      this.cookie.delete('dni');
      this.router.navigate(['/login']);
    }

    getDni() {
      return this.cookie.get('dni');
    }

    isLogin() {
      return this.cookie.check('token');
    }

    isAdmin() {
      return this.cookie.check('admin');
    }

    getUser() {
      return this.cookie.get('user');
    }

    getName() {
      return this.cookie.get('name');
    }

    getAuthHeaders() {
      return {
        'Authorization': `Bearer ${this.getToken()}`
      }
    }
}
