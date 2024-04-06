import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { GestionCartesComponent } from './gestion-cartes/gestion-cartes/gestion-cartes.component';
import { ArticleComponent } from './article/article.component'; 

import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'body', component: BodyComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: 'gestion-cartes', component: GestionCartesComponent },
  { path: 'articles', component: ArticleComponent }, 
  { path: 'cart', component: CartPageComponent },
];
