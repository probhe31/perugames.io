import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as globals from '../globals'
import { CartOrder } from '../models/cart-order';
import { CartOrders } from '../models/cart-orders';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CartService {

   constructor(
    private http:HttpClient) { }
    
  addToCart (cartOrder): Observable<CartOrder> {
    return this.http.post<CartOrder>(globals.BASE_API_URL+'/orders/add-to-cart', cartOrder, httpOptions).pipe(
      tap((cartOrder: CartOrder) => console.log('added to cart')),
      catchError(this.handleError<CartOrder>('addToCart'))
    );
  }

  
	getCartOrdersID(): Observable<CartOrders>
	{
		return this.http.get<CartOrders>(globals.BASE_API_URL+'/orders/cart', httpOptions).pipe(
			tap(_ => console.log('get cart orders')),
			catchError(this.handleError('getCartOrders', null))  		
		);
	}

  getCartOrders(orderID): Observable<CartOrders>
	{
    let parameters : HttpParams = new HttpParams();
    parameters.set('order_id', orderID);

    //--->?order_id='+orderID
		return this.http.get<CartOrders>(globals.BASE_API_URL+'/orders/cart?order_id='+orderID, httpOptions).pipe(
			tap(_ => console.log('get cart orders')),
			catchError(this.handleError('getCartOrders', null))  		
		);
	}
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }

  

}
