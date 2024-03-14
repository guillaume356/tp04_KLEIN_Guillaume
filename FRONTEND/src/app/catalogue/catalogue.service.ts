import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; 
import { Produit } from '../produit/produit';
import { environment } from '../environments/environement';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private searchCriteriaSubject = new BehaviorSubject<{ name: string; brand: string }>({ name: '', brand: '' });
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  constructor(private http: HttpClient) {}

  public setSearchCriteria(criteria: { name: string; brand: string }): void {
    this.searchCriteriaSubject.next(criteria);
  }

  public getCatalogue(): Observable<Produit[]> {
    return this.searchCriteria$.pipe(
      switchMap((criteria: { name: string; brand: string }) =>
        this.http.get<{cars: Produit[]}>(environment.baseUrl).pipe(
          map(({cars}) => cars.filter((product: Produit) => 
            (!criteria.name || product.name.toLowerCase().includes(criteria.name.toLowerCase())) &&
            (!criteria.brand || product.brand.toLowerCase().includes(criteria.brand.toLowerCase()))
          ))
        )
      )
    );
  }


}
