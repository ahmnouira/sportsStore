import { Component } from "@angular/core";
import { Cart } from 'src/app/model/cart.model';


@Component({
   selector: 'app-cart-details',
   templateUrl: './cart-details.component.html',
   styleUrls: ['./cart-details.component.css']
})

export class CartDetailsComponent {

    cart : Cart; 

    // use cart as a service
    constructor(public cartService: Cart) {
        this.cart = cartService;
    }
}