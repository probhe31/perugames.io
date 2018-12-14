import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class OnLoginAnnounceService {
 
  private onLoginCompleteSource = new Subject<string>();
  loginCompleted$ = this.onLoginCompleteSource.asObservable();

  loginComplete(nickname: string) {
    this.onLoginCompleteSource.next(nickname);
  }
}