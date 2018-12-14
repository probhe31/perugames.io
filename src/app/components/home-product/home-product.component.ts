import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartOrder } from 'src/app/models/cart-order';
import { CartService } from 'src/app/services/cart.service';
import { CartOrders } from 'src/app/models/cart-orders';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
  @Input() product: Product;

  cartOrder : CartOrder;
  cartOrders : CartOrders;
  isLoadingResults = false;


  constructor(private cartService:CartService) { }

  ngOnInit() {
    
  }

  addToCart():void
  {
    this.isLoadingResults = true;
    
    console.log("on click add to cart");

   

    this.cartOrder = new CartOrder();
    this.cartOrder.order = null;
    this.cartOrder.product = this.product.id;
    this.cartOrder.quantity = 1;


    let order_id = localStorage.getItem('order_id');

    if(order_id==null)
    { 
      this.cartService.getCartOrdersID()
    	.subscribe(res => {
			this.cartOrders = res["data"];
			this.cartOrder.order = this.cartOrders.id;
			localStorage.setItem('order_id', this.cartOrder.order);
			this.cartService.addToCart(this.cartOrder)
			.subscribe(res => {
				this.isLoadingResults = false;
				}, (err) => {
				console.log(err);
				this.isLoadingResults = false;
				});
			}, (err) => {
				console.log(err);
				this.isLoadingResults = false;
			});
    }else
    {
      	
		this.cartOrder.order = order_id;
		this.cartService.addToCart(this.cartOrder)
		.subscribe(res => {
			this.isLoadingResults = false;
			}, (err) => {
			console.log(err);
			this.isLoadingResults = false;
			});
    }


    


   

  }

}
