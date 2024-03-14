import { Component } from '@angular/core';
import { CatalogueService } from '../catalogue/catalogue.service'; 
import { Produit } from '../produit/produit'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-moteur-de-recherche',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './moteur-de-recherche.component.html',
  styleUrls: ['./moteur-de-recherche.component.css']
})
export class MoteurDeRechercheComponent {
  searchCriteria = {
    name: '',
    brand: '',
  };

  filteredProducts: Produit[] = [];

  constructor(private catalogueService: CatalogueService) { }

 

  onSearch() {
    this.catalogueService.setSearchCriteria(this.searchCriteria);
  }
}
