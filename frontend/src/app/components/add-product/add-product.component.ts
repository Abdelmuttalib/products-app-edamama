import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductType } from 'src/app/ProductType';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  // emit onADdProduct function
  @Output() onAddProduct: EventEmitter<ProductType> = new EventEmitter();

  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  showAddProduct: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddProduct = !value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (
      !this.productName ||
      !this.productDescription ||
      !this.productImage ||
      !this.productPrice
    ) {
      alert('* Kindly enter all product data');
      return;
    }

    // new product data
    const newProduct = {
      title: this.productName,
      description: this.productDescription,
      price: this.productPrice,
      image: this.productImage,
    };

    // emit function with new product data
    this.onAddProduct.emit(newProduct);

    this.productName = '';
    this.productDescription = '';
    this.productImage = '';
    this.productPrice = '';
  }
}
