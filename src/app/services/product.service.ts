import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as globals from '../globals'
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private http:HttpClient) { }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(globals.BASE_API_URL+'/products', httpOptions)
      .pipe(       
        tap(products => console.log('fetched product')),
        catchError(this.handleError('getProducts', []))
    );    
  }
  
  addProduct (product): Observable<Product> {
    return this.http.post<Product>(globals.BASE_API_URL+'/products', product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }

  

}
