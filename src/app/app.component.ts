import { Component } from '@angular/core';
import { OnLoginAnnounceService }     from './services/on-login-announced.service';
import { OnCartAddedAnnounceService } from './services/on-cart-added-announced.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [OnLoginAnnounceService, OnCartAddedAnnounceService]
})

export class AppComponent {
  title = 'peru-games';
  isLogin = false;
  numOrders = 0;
  nickname = "";

  constructor(private onLoginService: OnLoginAnnounceService, 
    private onCartAddedAnnounceService: OnCartAddedAnnounceService) {
    onLoginService.loginCompleted$.subscribe(
      astronaut => {
        this.nickname = astronaut;
        console.log("evento realizado " + astronaut);
        this.isLogin = true;       
      });

    onCartAddedAnnounceService.cartAdded$.subscribe(
      astronaut => {
        console.log("evento realizado " + astronaut);
        this.isLogin = true;       
        this.numOrders++;
      });
  }

  onLogin()
  {
    this.onLoginService.loginComplete("bherring");
  }
  
}
