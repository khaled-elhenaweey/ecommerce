import { Component, inject } from '@angular/core';
import { Products } from '../services/products';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { Card } from '../../../shared/card/card';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-products-list',
  imports: [Button, Card],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  private productsService = inject(Products);
  private subscription?: Subscription;

  products: Product[] = [];
  isLoading = true;

  ngOnInit() {
    this.subscription = this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
