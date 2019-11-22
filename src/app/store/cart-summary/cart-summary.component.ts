import { Component } from "@angular/core";
import { Cart } from 'src/app/model/cart.model';

@Component({
    selector : 'app-cart-summary',
    templateUrl  :'./cart-summary.component.html'
})

export class CartSummaryComponent {
    // use Cart as a service: dependency injection here
    constructor (public cart : Cart) {}
}