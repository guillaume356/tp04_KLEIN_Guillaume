import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartesService {
  private cartes: any[] = [];

  constructor() {}

  getCartes(): any[] {
  return this.cartes;
  }
  
  ajouterCarte(carte: any): void {
  this.cartes.push(carte);
  }
  
  modifierCarte(id: number, carte: any): void {
  }
  
  supprimerCarte(id: number): void {
  this.cartes = this.cartes.filter(carte => carte.id !== id);
  }
  }
