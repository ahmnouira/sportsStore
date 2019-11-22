import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  StoreComponent,
  CartSummaryComponent,
  CartDetailsComponent,
  CartCheckoutComponent
  ],
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  exports: [StoreComponent, CartCheckoutComponent, CartDetailsComponent], // can be used by other parts
})

export class StoreModule {}
