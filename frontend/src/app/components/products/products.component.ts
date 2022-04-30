import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/ProductType';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService // private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products: ProductType[]) => (this.products = products));
  }

  // Add Product to Cart
  addProductToCart(product: ProductType) {
    this.cartService
      .addProductToCart(product)
      .subscribe(() => alert('Item added to cart'));
  }

  // Delete Product
  deleteProduct(product: ProductType) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        () =>
          (this.products = this.products.filter(
            (productItem) => productItem.id !== product.id
          ))
      );

    alert('Item deleted');
  }

  // Add new Product
  addProduct(product: ProductType) {
    this.productService
      .addProduct(product)
      .subscribe((product) => this.products.push(product));
  }
}
