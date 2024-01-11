import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdminService } from '../../services/admin.services';
import { UserData } from '../models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class GetUsersResolver implements Resolve<Observable<any>> {

  constructor(private adminService: AdminService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.adminService.getUsers().pipe(
      tap((data: any) => {
        this.adminService.usersData = data.map((user: UserData) => new UserData(user));
        this.adminService.max_pages = Math.ceil(this.adminService.usersData.length / 10);
      })
    );
  }
}