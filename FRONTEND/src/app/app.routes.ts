import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { GestionCartesComponent } from './gestion-cartes/gestion-cartes/gestion-cartes.component';
import { ArticleComponent } from './article/article.component'; 
import { AccountPageComponent } from './account-page/account-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'body', component: BodyComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: 'gestion-cartes', component: GestionCartesComponent },
  { path: 'articles', component: ArticleComponent }, 
  { path: 'cart', component: CartPageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];