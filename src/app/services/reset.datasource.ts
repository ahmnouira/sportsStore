import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order.model';

const PROTOCOL = 'http';
const PORT = '3500';

@Injectable()
export class RestDataSource {

    baseURL  : string;

    constructor(public http: HttpClient) {

        // location  is a global object providedbu the browser
        this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts() : Observable<Product[]> {     
            return this.http.get<Product[]>(this.baseURL + "products");
    }
    saveOrder( order : Order) : Observable<Order> {
        return this.http.post<Order>(this.baseURL  + "orders", order);
    }

}