import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private router = inject(Router);
  loginLocalStorage(email: string, password: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    this.router.navigate(['/profile']);
  }
}
