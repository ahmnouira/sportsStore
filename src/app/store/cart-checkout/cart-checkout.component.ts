import { Component } from "@angular/core";
import { Order } from 'src/app/model/order.mdel';
import { NgForm } from '@angular/forms';
import { OrderRepository } from 'src/app/model/order.repository';
@Component({
    selector : 'app-car-checkout',
    templateUrl: 'cart-checkout.component.html',
    styleUrls: ['cart-checkout.component.css']
})

export class CartCheckoutComponent {
    orderSent : boolean = false;        // does the order sent ?
    submitted : boolean = true;         // does the form submited ?

    constructor(public orderRepository: OrderRepository, public order: Order) {

    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if(form.valid) {
            this.orderRepository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.submitted = false;
                this.orderSent = true;
            })
        }
    }

}