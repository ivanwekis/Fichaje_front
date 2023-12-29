import { CanActivateFn } from '@angular/router';

export const canServiceGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false;
  
  if (isLoggedIn) {
    return true; // Permitir la activación de la ruta
  } else {
    // Redirigir a la página de inicio de sesión o a otra ruta si el usuario no está autenticado
    // Puedes usar state.url para obtener la URL que se estaba intentando acceder
    // y redirigir a esa URL después de iniciar sesión
    // return state.url === '/login' ? true : ['/login'];
    return false;
  }
};
