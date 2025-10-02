import { Component, signal } from '@angular/core';
import { FormTable } from './form-table/form-table';
import { SlideShow } from './slide-show/slide-show';
@Component({
  selector: 'app-root',
  imports: [FormTable, SlideShow],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
