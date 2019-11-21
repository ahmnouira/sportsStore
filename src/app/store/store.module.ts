import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";


@NgModule({
  declarations: [StoreComponent],
  imports: [BrowserModule, FormsModule, ModelModule],
  exports: [StoreComponent] // can be used by other parts
})

export class StoreModule {}
