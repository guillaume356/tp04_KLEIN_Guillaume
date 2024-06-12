import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';
import { environment } from '../environments/environement'; 
import { Produit } from '../produit/produit';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  private baseUrl = 'http://localhost:8080'; // Utilisation de l'URL depuis environment
  private searchCriteriaSubject = new BehaviorSubject<{ name: string; brand: string }>({ name: '', brand: '' });
  searchCriteria$ = this.searchCriteriaSubject.asObservable();

  constructor(private http: HttpClient) {}




  

  setSearchCriteria(criteria: { name: string, brand: string }) {
    this.searchCriteriaSubject.next(criteria);
  }

  getProduits(): Observable<Produit[]> {
    return this.http.get<{ cars: Produit[] }>(`${this.baseUrl}/search-pipe`).pipe(
      map(response => response.cars),
      catchError(error => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

  searchProduits(criteria: { name: string, brand: string }): Observable<Produit[]> {
    return this.http.get<{ cars: { [key: string]: Produit } }>(`${this.baseUrl}/search-pipe?name=${criteria.name}&brand=${criteria.brand}`).pipe(
      map(response => {
        console.log('Response from search:', response);
        // Transformation de l'objet en tableau
        const carsArray = Object.values(response.cars);
        console.log('Transformed search response:', carsArray);
        return carsArray;
      }),
      catchError(error => {
        console.error('Error searching products:', error);
        throw error;
      })
    );
  }

  getProducts(): Observable<Produit[]> {
    return this.http.get<{message: string, data: Produit[]}>(`${this.baseUrl}/search-pipe`).pipe(
      tap(response => console.log('Response received:', response)),
      map(response => {
        if (!response.data) {
          throw new Error('No data received');
        }
        return response.data;
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Error fetching products'));
      })
    );
  }

  searchProducts(name: string, brand: string): Observable<Produit[]> {
    return this.http.get<{message: string, data: Produit[]}>(`${this.baseUrl}/search-pipe?name=${name}&brand=${brand}`).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      })
    );
  }

  public getCatalogue(): Observable<Produit[]> {
    return this.searchCriteria$.pipe(
      switchMap((criteria: { name: string; brand: string }) => {
        const params = new HttpParams()
          .set('name', criteria.name || '')
          .set('brand', criteria.brand || '');
  
        return this.http.get<Produit[]>(`${this.baseUrl}/search-pipe`, { params });
      })
    );
  }
}
