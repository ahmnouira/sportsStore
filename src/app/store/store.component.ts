import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product} from "../model/product.model";
import { Cart } from '../model/cart.model';

// tells angular the class is a component
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls : ['store.component.css']

})
export class StoreComponent {

  public selectedCategory = null // null: means here all categories
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart) { }

   get products(): Product[] {
     let pageIndex= (this.selectedPage - 1) * this.productsPerPage;
       return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
   }

   get categories(): string[] {
       return this.repository.getCategories();
   }

   changeCategory(newCategory?: string) {
     this.selectedCategory = newCategory;
   }

   changePage(newPage: number) {
     this.selectedPage = newPage;
   }

   changePageSize(newSize: number){
     this.productsPerPage = Number(newSize);
     this.changePage(1);
   }

   get pageNumbers(): number[] {
     return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x, i) => i + 1 )
   }


   addProductToChart(product : Product) : void {
    this.cart.addProduct(product);
   }
}