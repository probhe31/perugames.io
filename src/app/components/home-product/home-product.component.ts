import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  getHero():void
  {
    
  }

}
