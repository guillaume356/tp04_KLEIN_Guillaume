import { Component, Input } from '@angular/core';
import { Produit } from './produit';

@Component({
  selector: 'app-produit',
  standalone: true,
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  @Input() produit!: Produit;

  getFormattedPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

}
