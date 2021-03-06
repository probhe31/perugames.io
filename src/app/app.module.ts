import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCategoryListComponent } from './components/header-category-list/header-category-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { HomeFeaturedProductsComponent } from './components/home-featured-products/home-featured-products.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShippingInfoComponent } from './components/shipping-info/shipping-info.component';
import { ShoppingCartResumeComponent } from './components/shopping-cart-resume/shopping-cart-resume.component';
import { ConfirmSaleComponent } from './components/confirm-sale/confirm-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCategoryListComponent,
    HomeProductComponent,
    HomeFeaturedProductsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    ShoppingCartComponent,
    ShippingInfoComponent,
    ShoppingCartResumeComponent,
    ConfirmSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
