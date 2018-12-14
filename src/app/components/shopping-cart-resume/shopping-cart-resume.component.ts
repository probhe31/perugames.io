import { Component, OnInit, Input } from '@angular/core';
import { ConfirmSale } from 'src/app/models/confirm-sale';

@Component({
  selector: 'app-shopping-cart-resume',
  templateUrl: './shopping-cart-resume.component.html',
  styleUrls: ['./shopping-cart-resume.component.css']
})
export class ShoppingCartResumeComponent implements OnInit {

  @Input() confirm_sale: ConfirmSale;
  
  constructor() { }

  ngOnInit() {
  }

  

}
