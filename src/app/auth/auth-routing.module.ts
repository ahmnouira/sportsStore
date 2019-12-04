import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: 'log-in' , component: AuthComponent},
  {path: 'main', component : AdminComponent},
  {path: '**', redirectTo: '/log-in'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
