import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ShippingService } from 'src/app/services/shipping.service';
import { ConfirmSale } from 'src/app/models/confirm-sale';
import { OnCartAddedAnnounceService } from 'src/app/services/on-cart-added-announced.service';

@Component({
  selector: 'app-shipping-info',
  templateUrl: './shipping-info.component.html',
  styleUrls: ['./shipping-info.component.css']
})
export class ShippingInfoComponent implements OnInit {

  shippingForm : FormGroup;
  constructor(private formBuilder:FormBuilder, private shippingService : ShippingService, private onCartAddedAnnounceService: OnCartAddedAnnounceService) { }
  is_confirm_sale = false;
  confirmSale : ConfirmSale;

  ngOnInit() {
    this.shippingForm = this.formBuilder.group({
      'has_shipping':[null,Validators.required],
      'full_name':[null,Validators.required],
      'email':[null,Validators.required],
      'phone':[null,Validators.required],
      'city':[null,Validators.required],
      'street':[null,Validators.required],
    });

  }


  onFormSubmit(form:NgForm) {

    let order_id = localStorage.getItem('order_id');

    if(order_id==null)
    { 
      console.log("ERROR: no hay codigo de orden");
    }else
    {
      this.shippingService.addShipping(order_id, form)
      .subscribe(res => {
        this.confirmSale = res;
        this.is_confirm_sale = true;
        //localStorage.clear();
        localStorage.removeItem('order_id');
        this.onCartAddedAnnounceService.cardAddComplete("clear");
          ///let id = res['_id'];
        }, (err) => {
          console.log(err);
        });
    }
   

  }

}
