import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from '../services/reset.datasource';

// register providers as services
@NgModule({
  imports : [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, RestDataSource ]

   // {provide : StaticDataSource, useClass : RestDataSource}]
   
})

export class ModelModule{}
