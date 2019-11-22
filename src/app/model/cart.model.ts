import { CartLine } from './cart-line.model';
import { Product } from './product.model';
import { Injectable } from '@angular/core';


@Injectable()
export class Cart {

    public lines : CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number =0;

    public getCartTotal() : number {
        var price :number = 0;
        this.lines.forEach((line : CartLine) => {
                price += line.quantity * line.product.price;
        })
        return price
    }

    // calculate number of items and price of those items
    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += line.quantity * line.product.price;
        });
    }

    // add product to the CartLine
    addProduct(product : Product, quantity: number = 1) : void {
        let line: CartLine = this.lines.find(line => line.product.id === product.id);
        if(line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    // update quantity
    updateQuantity(product: Product, quantity: number) {
        let line : CartLine = this.lines.find(line => line.product.id === product.id);
            if(line != undefined) {
                line.quantity = Number(quantity);
            }
        this.recalculate;  

    }

    // removeLine
    removeLine(id: number) {
        let index : number = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    // clearAll
    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice =0;
    }
    
}