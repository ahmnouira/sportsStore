import { Injectable } from "@angular/core";
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { RestDataSource } from '../services/reset.datasource';


@Injectable() 
export class OrderRepository {

    private orders : Order[] =[];

    constructor(private dataSource : RestDataSource ) {
        
    }

    getOrders(): Order[] {
        return this.orders;
    }

    getOrder(id: number) : Order {
        return this.orders.find(order => order.id === id);
    }

    saveOrder(order: Order) : Observable<Order>  {
        return this.dataSource.saveOrder(order);
    }


}