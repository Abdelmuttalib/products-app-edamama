import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/ProductType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: ProductType[] | undefined;
  product: ProductType | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService
      .getProducts()
      .subscribe(
        (allProductsFromServer: ProductType[]) =>
          (this.product = allProductsFromServer.find(
            (productItem) => productItem.id === productIdFromRoute
          ))
      );
  }
}
