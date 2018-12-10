import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home-featured-products',
  templateUrl: './home-featured-products.component.html',
  styleUrls: ['./home-featured-products.component.css']
})
export class HomeFeaturedProductsComponent implements OnInit {

  products : Product[];

  constructor(private productService : ProductService) { }
  
  ngOnInit() {
    
    this.getProducts();
    
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(data => this.products = data["results"]);
  }


}
