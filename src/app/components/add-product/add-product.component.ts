import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm : FormGroup;
  product : Product;
  isLoadingResults = false;

  constructor(private router:Router, private productService:ProductService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'category':[null,Validators.required],
      'name':[null,Validators.required],
      'active':[null,Validators.required],
      'price':[null,Validators.required],
      'short_description':[null,Validators.required],
      'long_description':[null,Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.productService.addProduct(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          //--this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
