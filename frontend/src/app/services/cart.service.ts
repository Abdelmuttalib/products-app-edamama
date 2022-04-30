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
export class CartService {
  private apiUrl: string = 'http://localhost:5000/cart';
  constructor(private http: HttpClient) {}

  // Get cart items
  getCartItems(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl);
  }

  // Add new Cart Item Services
  // Returns an Observable
  addProductToCart(product: ProductType | undefined): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiUrl, product, httpOptions);
  }
}
