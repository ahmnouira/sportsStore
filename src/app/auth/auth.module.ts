import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AdminComponent, AuthComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
