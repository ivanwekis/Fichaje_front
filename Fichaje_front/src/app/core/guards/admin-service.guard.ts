import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../../services/login.services';
import { Inject, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAdmin implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginService.isAdmin() && this.loginService.isLogin()) {
      return true;
    } else {
      // Redirigir a la página de inicio de sesión si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}

