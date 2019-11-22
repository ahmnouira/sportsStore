import { Product } from './product.model';

export class CartLine{

    constructor(public product: Product, public quantity: number) {

    }

    // calcule sum of a product
    getLineTotale() : number {
        return this.quantity * this.product.price;
    }

}