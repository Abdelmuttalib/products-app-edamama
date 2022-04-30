import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/ProductType';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: ProductType[] = [];
  constructor(
    private cartService: CartService // private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((products: ProductType[]) => (this.cartItems = products));
  }

  // Add Product Cart
  addProductToCart(product: ProductType) {
    this.cartService.addProductToCart(product);
  }
}
