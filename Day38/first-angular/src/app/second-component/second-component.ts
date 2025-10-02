import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent {
  pwd: string = 'first-angular/src/app/second-component';
}
