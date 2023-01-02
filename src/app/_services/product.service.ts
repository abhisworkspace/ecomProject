import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type/data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(data: Product) {
    return this.http.post(`http://localhost:3000/products`, data);
  }

  getAllProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }

  deleteProduct(id: number) {
    console.log('service called');
    console.log('id : ', id);

    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
