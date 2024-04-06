// add-to-cart-button.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCart } from '../cart/cart.action';

@Component({
  selector: 'app-add-to-cart-button',
  
  standalone: true,
  template: `<button (click)="addToCart(product)">Ajouter au Panier</button>`,
})
export class AddToCartButtonComponent {
  @Input() product: any; 

  constructor(private store: Store) {}

  addToCart(product: any) {
    
    console.log('Adding product:', this.product);
    this.store.dispatch(new AddToCart(product));
  }
}   
