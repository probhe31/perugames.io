import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ProductCategory} from '../models/product-category'
import * as globals from '../globals'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryService {

  constructor(
    private http:HttpClient) { }

  getProductCategories(): Observable<ProductCategory[]>
  {
    return this.http.get<ProductCategory[]>(globals.BASE_API_URL+'/categories', httpOptions)
      .pipe(       
        tap(_ => this.log('fetched product categories')),
        catchError(this.handleError('getProductCategories', []))
    );    
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ProductCategories: ${message}`);
  }

}
