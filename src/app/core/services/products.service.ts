import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { log } from 'node:console';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products = signal<Product[]>([
    { id: 1, name: 'Producto A', price: 120, stock: 50, status: 'active' },
    { id: 2, name: 'Producto B', price: 80, stock: 20, status: 'active' },
    { id: 3, name: 'Producto C', price: 200, stock: 0, status: 'inactive' },
  ]);

  getProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number) {
    console.log('Fetching product with id:', id);
    return this.products().find(p => p.id === id);
  }

  addProduct(product: Product) {
    this.products.update((list) => [...list, product]);
  }

  updateProduct(updated: Product) {
    this.products.update((list) =>
      list.map((p) => (p.id === updated.id ? updated : p))
    );
  }

  deleteProduct(id: number) {
    this.products.update((list) => list.filter((p) => p.id !== id));
  }
}
