// cart-item-count.component.ts
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';

import { CommonModule } from '@angular/common';
import { CartState } from '../cart/cart.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-item-count',  
  standalone: true,
  imports: [CommonModule],
  template: `<div>Articles dans le panier : {{ itemCount$ | async }}</div>`,
})
export class CartItemCountComponent {
  @Select(CartState.getNumberOfItems) itemCount$!: Observable<number>;
}
