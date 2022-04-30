import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../ProductType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'http://localhost:5000/products';
  private cartApiUrl: string = 'http://localhost:5000/cart';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl);
  }

  // Delete Product Service
  // Returns an Observable
  deleteProduct(product: ProductType): Observable<ProductType> {
    const productUrl = `${this.apiUrl}/${product.id}`;
    return this.http.delete<ProductType>(productUrl);
  }

  // Add new Product Service
  // Returns an Observable
  addProduct(product: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiUrl, product, httpOptions);
  }

  // Add new Product Service
  // Returns an Observable
  addProductToCart(product: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.cartApiUrl, product, httpOptions);
  }
}
