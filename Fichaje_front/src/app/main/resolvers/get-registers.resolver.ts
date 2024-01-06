import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.services';
import { Register } from '../../models/register.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetRegistersResolver implements Resolve<Observable<any>> {

  constructor(private registerService: RegisterService, private loginService: LoginService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page = 1; // Puedes ajustar esto según tus necesidades

    return this.registerService.getRegisters(page, this.loginService.user).pipe(
      tap((data: any) => {
        console.log('Registros obtenidos correctamente.');
        this.registerService.registers = data.registers.map((register: Register) => new Register(register));
      })
    );
  }
}