import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCartesComponent } from '../gestion-cartes/gestion-cartes/gestion-cartes.component';
import { FormulaireCarteComponent } from './formulaire-carte/formulaire-carte.component';
import { ListeCartesComponent } from './liste-cartes/liste-cartes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestionCartesComponent,
    FormulaireCarteComponent,
    ListeCartesComponent
  ],
  imports: [
    
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    GestionCartesComponent,
    FormulaireCarteComponent,
    ListeCartesComponent
  ]
})
export class GestionCartesModule { }
