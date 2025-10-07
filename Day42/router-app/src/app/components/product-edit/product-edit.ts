import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-edit.html',
})
export class ProductEdit {
  @Input() product!: Product;
  @Output() productUpdated = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  save() {
    this.productUpdated.emit(this.product);
  }

  close() {
    this.cancel.emit();
  }
}
