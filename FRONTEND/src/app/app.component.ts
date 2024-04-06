import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { CatalogueComponent } from './catalogue/catalogue.component'; 
import { HttpClient } from '@angular/common/http';
import { MoteurDeRechercheComponent } from './moteur-de-recherche/moteur-de-recherche.component';
import { GestionCartesModule } from './gestion-cartes/gestion-cartes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent, 
    RecapitulatifComponent, 
    CatalogueComponent, 
    GestionCartesModule,
    MoteurDeRechercheComponent,
    RouterOutlet, 
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'tp3_Guillaume_KLEIN';
  formSubmitted = false;

  handleFormSubmission(event: boolean) {
    this.formSubmitted = event;
  }
}
