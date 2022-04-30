import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Products App';
  // @Output() btnClick = new EventEmitter();
  showAddProduct: boolean = false;
  showAddProductBtn: string = 'Add new Product';
  subscription: Subscription;

  cartItemsCount: number | undefined;

  filmIcon = faShoppingBag;
  cartLabel: string = 'cart';

  constructor(private uiService: UiService, private cartService: CartService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddProduct = value));
  }

  ngOnInit(): void {
    this.cartService
      .getCartItems()
      .subscribe((itemsCount) => (this.cartItemsCount = itemsCount.length));
  }

  onClick() {
    this.uiService.toggleAddProduct();
    this.showAddProduct = !this.showAddProduct;
    this.showAddProductBtn = this.showAddProduct ? 'Close' : 'Add new Product';
  }
}
