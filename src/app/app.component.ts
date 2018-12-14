import { Component } from '@angular/core';
import { OnLoginAnnounceService }     from './services/onLoginAnnounced.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [OnLoginAnnounceService]
})

export class AppComponent {
  title = 'peru-games';
  isLogin = false;

  constructor(private onLoginService: OnLoginAnnounceService) {
    onLoginService.loginCompleted$.subscribe(
      astronaut => {
        console.log("evento realizado " + astronaut);
        this.isLogin = true;
        //this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  /*OnUserLogin(data:{text:string})
  {
      console.log("me llega el maldito evento :D " + data.text);
      
  }*/

  onLogin()
  {
    this.onLoginService.loginComplete("bherring");
  }
  
}
