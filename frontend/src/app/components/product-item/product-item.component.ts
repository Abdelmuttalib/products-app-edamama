import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductType } from 'src/app/ProductType';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductType | undefined;
  @Output() onDeleteProduct: EventEmitter<ProductType> = new EventEmitter();
  @Output() addProductToCart: EventEmitter<ProductType> = new EventEmitter();

  xMarkIcon = faXmark;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onAddToCart(product: ProductType | undefined) {
    this.cartService
      .addProductToCart(product)
      .subscribe(() => alert('Item added to cart!'));
  }

  onDelete(product: ProductType | undefined) {
    this.onDeleteProduct.emit(product);
  }
}
