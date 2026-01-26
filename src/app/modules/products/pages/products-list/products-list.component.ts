import { ProductsService } from '../../../../core/services/products.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsListComponent {
  private productsService = inject(ProductsService);

  products = this.productsService.getProducts();
}
