import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
})
export class ProductForm {
  @Output() productAdded = new EventEmitter<Product>();

  name: string = '';
  price: number = 0;
  category: string = '';

  addProduct() {
    if (this.name && this.price > 0 && this.category) {
      this.productAdded.emit({
        id: Date.now(),
        name: this.name,
        price: this.price,
        category: this.category,
      });
      this.name = '';
      this.price = 0;
      this.category = '';
    }
  }
}
