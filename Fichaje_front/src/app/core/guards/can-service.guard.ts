import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../services/login.services';
import { Inject } from '@angular/core';

export function loginGuard(): CanActivateFn {
  return () => {
    const loginService = Inject(LoginService);
    
    if (loginService.isLogin() ) {
      return true;
    }
    return false;
  };
}