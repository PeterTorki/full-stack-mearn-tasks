import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');
  let router = inject(Router);
  if (email && password) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
