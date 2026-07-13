import { Component, inject } from '@angular/core';
import { Products } from '../services/products';
import { Subscription } from 'rxjs';
import { Category, Product } from '../models/product';
import { Card } from '../../../shared/card/card';
import { Button } from '../../../shared/button/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-list',
  imports: [Button, Card, RouterLink],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  private productsService = inject(Products);
  private router = inject(Router);
  private subscription?: Subscription;

  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: string = '';
  private categoriesSubscription?: Subscription;
  isLoading = true;
  errorMessage: string | null = null;

  ngOnInit() {
    this.loadProducts();
    this.categoriesSubscription = this.productsService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log(this.categories);
      },
      error: (error) => {
        console.error('Failed to fetch categories:', error);
      },
    });
  }
  goToProductDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }
  onAddToCartClick(event: Event): void {
    event.stopPropagation();
    console.log('Add to cart clicked');
  }
  private loadProducts(): void {
    this.isLoading = true;
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
    this.categoriesSubscription?.unsubscribe();
  }
}
