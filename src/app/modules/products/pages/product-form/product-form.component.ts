import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.css'],
})
export class ProductFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private service = inject(ProductsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isEdit = false;
  productId!: number;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    status: ['active', Validators.required],
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;
      this.productId = Number(id);

      const product = this.service.getProductById(this.productId);
      if (!product) {
        this.router.navigate(['/products']);
        return;
      }

      this.form.patchValue(product);
    }
  }

    submit() {
        if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
        }
        const data = this.form.getRawValue();
        const product = {
        id: this.isEdit ? this.productId : Date.now(),
        name: data.name,
        price: data.price,
        stock: data.stock,
        status: data.status as 'active' | 'inactive',
        };
        if (this.isEdit) {
        this.service.updateProduct(product);
        } else {
        this.service.addProduct(product);
        }

        this.router.navigate(['/products']);
    }

  cancel() {
    this.router.navigate(['/products']);
  }
}
