import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as globals from '../globals'
import { catchError, map, tap } from 'rxjs/operators';
import { UserToken } from '../models/user-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user):Observable<User>
  {
    return this.http.post<User>(globals.BASE_API_URL+'/register', user, httpOptions)
    .pipe(       
      tap((user: User) => console.log(`added product`)),
      catchError(this.handleError<User>('addProduct'))
    );    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  loginUser(user):Observable<UserToken>
  {
    return this.http.post<UserToken>(globals.BASE_API_URL+'/login', user, httpOptions)
    .pipe(       
      tap((userToken: UserToken) => console.log('login user')),
      catchError(this.handleError<UserToken>('log user error'))
    );    
  }


  
}
