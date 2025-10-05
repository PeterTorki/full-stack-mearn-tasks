import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductForm } from './product-form/product-form';
import { ProductList } from './products-list/products-list';
import { ProductEdit } from './product-edit/product-edit';
type Product = {
  id: number | string;
  name: string;
  price: number;
  category: string;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductForm, ProductList, ProductEdit],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [];
  favoriteProducts: string[] = [];
  productToEdit?: Product;

  addProduct(product: Product) {
    this.products.push({ ...product, id: Date.now() });
  }

  deleteProduct(id: number | string) {
    this.products = this.products.filter((p) => p.id !== id);
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

  updateProduct(updated: Product) {
    this.products = this.products.map((p) => (p.id === updated.id ? updated : p));
    this.productToEdit = undefined;
  }

  cancelEdit() {
    this.productToEdit = undefined;
  }

  protected readonly title = signal('notification-center-app');
}
