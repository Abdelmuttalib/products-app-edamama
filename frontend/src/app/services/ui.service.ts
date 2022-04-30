import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddProduct: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // Toggle add new Product Form
  toggleAddProduct() {
    this.showAddProduct = !this.showAddProduct;
    this.subject.next(this.showAddProduct);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
