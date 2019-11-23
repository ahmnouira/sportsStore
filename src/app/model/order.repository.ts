import { Injectable } from "@angular/core";
import { Order } from './order.mdel';
import { StaticDataSource } from './static.datasource';
import { Observable } from 'rxjs';


@Injectable() 
export class OrderRepository {

    private orders : Order[] =[];

    constructor(private dataSource : StaticDataSource ) {
        
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