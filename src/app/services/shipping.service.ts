import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as globals from '../globals'
import { Shipping } from '../models/shipping';
import { ConfirmSale } from '../models/confirm-sale';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }
    
  addShipping (orderID, shipping): Observable<ConfirmSale> {

    return this.http.put<ConfirmSale>(globals.BASE_API_URL+'/orders/'+orderID+'/confirm', shipping, httpOptions).pipe(
      tap((confirmSale: ConfirmSale) => console.log('added shipping w/ id=${confirmSale.full_name}')),
      catchError(this.handleError<ConfirmSale>('addProduct'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }

}
