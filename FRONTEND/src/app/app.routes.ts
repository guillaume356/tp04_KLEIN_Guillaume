import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { GestionCartesModule } from './gestion-cartes/gestion-cartes.module';
import { GestionCartesComponent } from './gestion-cartes/gestion-cartes/gestion-cartes.component';

export const routes: Routes = [
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'body', component: BodyComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: 'gestion-cartes', component: GestionCartesComponent },
  
];
