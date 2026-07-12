import { Component, inject } from '@angular/core';
import { Products } from '../services/products';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { Card } from '../../../shared/card/card';
import { Button } from '../../../shared/button/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products-list',
  imports: [Button, Card, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  private productsService = inject(Products);
  private subscription?: Subscription;

  products: Product[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  ngOnInit() {
    this.subscription = this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to fetch products.';
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
