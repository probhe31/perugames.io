import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { ConfirmSaleComponent } from './components/confirm-sale/confirm-sale.component';

const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'shipping-info', component:ShippingInfoComponent},
  {path:'confirm-sale', component:ConfirmSaleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,RegisterComponent,LoginComponent, AddProductComponent, ConfirmSaleComponent]