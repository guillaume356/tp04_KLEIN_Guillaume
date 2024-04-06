// cart-page.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CartState, CartStateModel } from '../cart/cart.state'; // Assurez-vous que le chemin est correct
import { RemoveFromCart } from '../cart/cart.action'; // Assurez-vous que le chemin est correct
import { CartItemCountComponent } from '../cart-item-count-component/cart-item-count-component.component';
import { AddToCartButtonComponent } from '../add-to-cart-button-component/add-to-cart-button-component.component';
import { CommonModule } from '@angular/common';
import { Article } from '../article/article.model';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItemCountComponent, AddToCartButtonComponent, CommonModule], 
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  @Select(CartState.getItems) cartItems$?: Observable<Article[]>; 

  constructor(private store: Store) {}

  removeFromCart(item: Article) { 
    this.store.dispatch(new RemoveFromCart(item));
  }
}
