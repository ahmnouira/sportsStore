import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule} from "./store/store.module";
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    AuthModule
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
