import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  addProduct(data: Product) {
    return this.http.post(`http://localhost:3000/products`, data);
  }

  editProduct(data: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/products/${data.id}`,
      data
    );
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  popularProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products?_limit=3`);
  }

  trendyProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products?_limit=8`);
  }

  searchProducts(query: string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }
}
