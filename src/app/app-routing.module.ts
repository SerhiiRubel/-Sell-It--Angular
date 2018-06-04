import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProductResolve} from './detail-page/product.resolve';

const routes: Routes = [
  {
    path: '', component: ProductPageComponent
  },
  {
    path: 'detail', component: DetailPageComponent
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
    resolve: {
      product: ProductResolve
    }
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
