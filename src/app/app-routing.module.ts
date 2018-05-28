import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: ProductPageComponent
  },
  {
    path: 'detail', component: DetailPageComponent
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
