import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from './cart.state';
import { RemoveFromCart } from './cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Directement un Observable de CartStateModel
  cart$: Observable<CartState> = this.store.select(CartState);

  constructor(private store: Store) {}

  removeFromCart(item: any) { // Remplacez any par le type approprié
    console.log('Dispatching RemoveFromCart with item:', item);
    this.store.dispatch(new RemoveFromCart(item));
  }
}
