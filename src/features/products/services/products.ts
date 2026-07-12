import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://dummyjson.com/products';

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.baseUrl);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
