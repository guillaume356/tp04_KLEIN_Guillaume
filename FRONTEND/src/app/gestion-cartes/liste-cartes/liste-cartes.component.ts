import { Component, OnInit } from '@angular/core';
import { CartesService } from '../cartes.service';

@Component({
  selector: 'app-liste-cartes',
  templateUrl: './liste-cartes.component.html',
  styleUrls: ['./liste-cartes.component.css']
})
export class ListeCartesComponent implements OnInit {
  cartes: any[] = []; 

  constructor(private cartesService: CartesService) {}

  ngOnInit() {
    this.cartes = this.cartesService.getCartes(); 
  }
}
