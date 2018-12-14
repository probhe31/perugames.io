import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nickname:string;
  @Input() isLogin:boolean;
  @Input() numOrders:boolean;

  constructor() { }

  ngOnInit() {
    
    if(localStorage.getItem("token")!=null)
    {
      this.isLogin = true;
      this.nickname = localStorage.getItem("nickname");
    }
  }

}
