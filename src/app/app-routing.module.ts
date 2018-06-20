import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProductResolve} from './detail-page/product.resolve';
import {AddAdvertComponent} from './add-advert/add-advert.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './core/guards/auth.guard';

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
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'addAdvert', component: AddAdvertComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
