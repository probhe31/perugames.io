import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartOrders } from 'src/app/models/cart-orders';
import { CartOrderDetail } from 'src/app/models/cart-order-detail';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartOrders : CartOrders;
  cartOrdersDetails : CartOrderDetail[];
  

  constructor(private cartService:CartService) { }

  ngOnInit() {

    this.getOrders();

  }

  
  getOrders()
  {
    
    let order_id = localStorage.getItem('order_id');
    console.log("my id de ordenes es " + order_id);
    if(order_id==null)
    { 
      
    }else
    {
      this.cartService.getCartOrders(order_id)
    	.subscribe(res => {
        console.log("get orders list but");
      this.cartOrders = res["data"];
      this.cartOrdersDetails = this.cartOrders.items;

			}, (err) => {
        
        console.log(err);
				
			}); 
    }
      
  }
}
