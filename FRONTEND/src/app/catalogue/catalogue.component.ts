import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogueService } from './catalogue.service';
import { Produit } from '../produit/produit';
import { CommonModule } from '@angular/common';
import { MoteurDeRechercheComponent } from '../moteur-de-recherche/moteur-de-recherche.component';
import { ProduitComponent } from '../produit/produit.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  imports: [CommonModule, MoteurDeRechercheComponent, ProduitComponent, HttpClientModule],
  standalone: true,
})
export class CatalogueComponent implements OnInit {
  catalogue$: Observable<Produit[]> = of([]);

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.catalogue$ = this.catalogueService.getProduits();
    this.catalogue$.subscribe(data => {
      console.log('Data received in component:', data);
    });
  }

  onSearch(criteria: { name: string, brand: string }) {
    this.catalogue$ = this.catalogueService.searchProduits(criteria);
    this.catalogue$.subscribe(data => {
      console.log('Data received from search:', data);
    });
  }
}
