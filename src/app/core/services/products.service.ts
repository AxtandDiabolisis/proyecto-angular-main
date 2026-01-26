import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, stock: 10 },
    { id: 2, name: 'Producto 2', price: 200, stock: 5 },
    // Puedes agregar más productos de ejemplo aquí
  ];

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    getProductById(id: number): Observable<Product | undefined> {
        return of(this.products.find(p => p.id === id));
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    updateProductById(id: number, updatedProduct: Partial<Product>): Observable<Product | undefined> {
      const index = this.products.findIndex(p => p.id === id);
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedProduct };
        return of(this.products[index]);
      }
      return of(undefined);
    }

    deleteProductById(id: number): void {
      this.products = this.products.filter(p => p.id !== id);
    }
  // Agrega más métodos según tus necesidades (update, delete, etc.)
}
