import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appLogout]',
  standalone: true,
})
export class LogoutDirective {
  constructor(private router: Router) {}

  @HostListener('click')
  onClick() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    // Or clear everything: localStorage.clear();

    this.router.navigate(['/login']);
  }
}
