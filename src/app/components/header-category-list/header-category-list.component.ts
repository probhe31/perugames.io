import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductCategory } from 'src/app/models/product-category';

@Component({
  selector: 'app-header-category-list',
  templateUrl: './header-category-list.component.html',
  styleUrls: ['./header-category-list.component.css']
})

export class HeaderCategoryListComponent implements OnInit {

  productCategories : ProductCategory[];

  isLogin = false;
  
  constructor(private productCategoryService : ProductCategoryService) { }
  
  ngOnInit() {
    
    this.getProductCategories();
    
  }

  getProductCategories(): void {
    this.productCategoryService.getProductCategories()
    .subscribe(data => this.productCategories = data["results"]);
  }

}
