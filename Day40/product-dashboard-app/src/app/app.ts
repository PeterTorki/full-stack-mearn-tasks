import { Component, signal } from '@angular/core';
import { ProductForm } from './product-form/product-form';
type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};
@Component({
  selector: 'app-root',
  imports: [ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  onFormSubmit(product: Product) {
    console.log('Product submitted:', product);
  }

  protected readonly title = signal('notification-center-app');
}
