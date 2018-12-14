import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class OnCartAddedAnnounceService {
 
  private onCartAddedSource = new Subject<string>();
  cartAdded$ = this.onCartAddedSource.asObservable();

  cardAddComplete(mission: string) {
    this.onCartAddedSource.next(mission);
  }
}