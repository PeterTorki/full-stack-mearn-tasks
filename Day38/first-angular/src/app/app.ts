import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { SecondComponent } from './second-component/second-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular');
  name: string = 'Peter';
}
