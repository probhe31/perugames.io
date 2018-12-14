import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm : FormGroup;
  product : Product;
  isLoadingResults = false;

  productCategories : ProductCategory[];
    

  selectedFile = null;
  constructor(private router:Router, private productService:ProductService, private productCategoryService : ProductCategoryService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getProductCategories();

    this.productForm = this.formBuilder.group({
      'category':[null,Validators.required],
      'name':[null,Validators.required],
      'active':[null,Validators.required],
      'price':[null,Validators.required],
      'short_description':[null,Validators.required],
      'long_description':[null,Validators.required],
      'image':[null,Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('category', form["category"]);
    fd.append('name', form["name"]);
    fd.append('price', form["price"]);
    fd.append('short_description', form["short_description"]);
    fd.append('long_description', form["long_description"]);

    this.productService.addProduct(fd)
      .subscribe(res => {
          this.isLoadingResults = false;
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  getProductCategories(): void {
    this.productCategoryService.getProductCategories()
    .subscribe(data => this.productCategories = data["results"]);
  }

  
  onFileSelected(event)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log("selected file " + this.selectedFile);
  }



}
