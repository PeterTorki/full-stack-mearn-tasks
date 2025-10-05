import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

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

  name = '';
  price!: number;
  category = '';

  addProduct() {
    if (!this.name.trim() || !this.price || !this.category.trim()) return;
    this.productAdded.emit({ id: 0, name: this.name, price: this.price, category: this.category });
    this.name = '';
    this.price = 0;
    this.category = '';
  }
}
