
import { CatalogueService } from '../catalogue/catalogue.service';
import { Produit } from '../produit/produit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-moteur-de-recherche',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './moteur-de-recherche.component.html',
  styleUrls: ['./moteur-de-recherche.component.css']
})
export class MoteurDeRechercheComponent {
  @Output() searchCriteriaChanged = new EventEmitter<{ name: string, brand: string }>();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: [''],
      brand: ['']
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(values => {
      this.searchCriteriaChanged.emit(values);
    });
  }

  onSearch() {
    this.searchCriteriaChanged.emit(this.searchForm.value);
  }
}
