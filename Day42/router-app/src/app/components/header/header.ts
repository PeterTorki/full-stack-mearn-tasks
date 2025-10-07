import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoutDirective } from '../../directives/logout-directive/toggle-login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LogoutDirective, CommonModule],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('email');
  }
}
