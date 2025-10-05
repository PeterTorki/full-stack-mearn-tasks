import { Component, Output, EventEmitter } from '@angular/core';

type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-product-form',
  imports: [],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  @Output() formSubmit = new EventEmitter<Product>();
  @Output() formReset = new EventEmitter<void>();

  id: number | string = '';
  name: string = '';
  price: number = 0;
  category: string = '';

  submitForm() {
    if (this.id && this.name && this.price > 0 && this.category) {
      const product: Product = {
        id: this.id,
        name: this.name,
        price: this.price,
        category: this.category,
      };
      this.formSubmit.emit(product);
      this.formReset.emit();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
