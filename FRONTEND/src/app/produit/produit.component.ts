// produit.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCart } from '../cart/cart.action'; // Assurez-vous que le chemin d'importation est correct
import { Produit } from './produit'; // Assurez-vous que le chemin d'importation est correct

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
})
export class ProduitComponent {
  @Input() produit!: Produit;

  constructor(private store: Store) {}

  addToCart() {
    // Dispatch l'action AddToCart avec le produit actuel
    this.store.dispatch(new AddToCart(this.produit));
  }

  getFormattedPrice(price: number): string {
    // Mettez en forme le prix comme vous le souhaitez, par exemple :
    return `$${price.toFixed(2)}`;
  }
}
