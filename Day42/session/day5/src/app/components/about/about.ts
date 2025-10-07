import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './about.html',
  styles: ``,
})
export class About {}
