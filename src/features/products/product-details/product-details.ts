import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from '../services/products';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private productsService = inject(Products);
  private subscription?: Subscription;

  product: Product | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.subscription = this.productsService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Product not found.';
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
