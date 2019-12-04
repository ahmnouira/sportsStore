import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './store/cart-details/cart-details.component';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout.component';

const routes: Routes = [
  
  {path: 'store', component: StoreComponent },
  {path: 'cart' , component: CartDetailsComponent},
  {path: 'checkout', component: CartCheckoutComponent},
  {path: 'admin', loadChildren: "./auth/auth.module#AuthModule"}, // use a dynamically loaded module
  {path: '**', redirectTo: '/store'}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
 }
