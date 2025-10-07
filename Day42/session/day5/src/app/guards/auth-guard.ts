import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let data = localStorage.getItem('name');
  let router = inject(Router);
  if (data) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
