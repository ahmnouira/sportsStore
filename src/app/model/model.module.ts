import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.mdel';
import { OrderRepository } from './order.repository';

// register providers as services
@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository ]
})

export class ModelModule{}
