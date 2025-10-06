import { Component, signal } from '@angular/core';
import { ProductForm } from './product-form/product-form';
import { CommonModule } from '@angular/common';
import { ProductsList } from './products-list/products-list';
import { ProductEdit } from './product-edit/product-edit';
type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsList, ProductEdit, ProductForm],
  templateUrl: './app.html',
})
export class App {
  product!: Product;

  favoriteProducts: string[] = [];
  productToEdit?: Product;

  addProduct(product: Product) {
    this.product = product;
  }

  toggleFavorites(name: string) {
    if (this.favoriteProducts.includes(name)) {
      this.favoriteProducts = this.favoriteProducts.filter((n) => n !== name);
    } else {
      this.favoriteProducts = [...this.favoriteProducts, name];
    }
  }

  startEdit(product: Product) {
    this.productToEdit = { ...product };
  }

  cancelEdit() {
    this.productToEdit = undefined;
  }

  protected readonly title = signal('notification-center-app');
}
