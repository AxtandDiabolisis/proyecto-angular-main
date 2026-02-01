import { ProductsService } from '../../../../core/services/products.service';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../core/models/product.model';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterModule, ConfirmDialogComponent],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css'],
})
export class ProductsListComponent {
  private service = inject(ProductsService);

  products = this.service.getProducts();
  selectedProductId: number | null = null;

  askDelete(id: number) {
    this.selectedProductId = id;
  }

  confirmDelete() {
    if (this.selectedProductId === null) return;

    this.service.deleteProduct(this.selectedProductId);
    this.selectedProductId = null;
  }

  cancelDelete() {
    this.selectedProductId = null;
  }

}
