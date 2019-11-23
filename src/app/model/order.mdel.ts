import { Injectable } from "@angular/core";
import { Cart } from './cart.model';

@Injectable() 
export class Order {
    public id: number;
    public name: string;
    public city: string;
    public address: string;
    public state: string;
    public zip : string;
    public country: string;
    public shipped: boolean = false;

    constructor(public cart: Cart) {

    }

    clear() : void {
        this.id =  null;
        this.name = this.city = this.address = this.state  = this.zip  = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}