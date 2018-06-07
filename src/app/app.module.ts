import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ProductService} from './core/services/product.service';
import {ProductPageComponent} from './product-page/product-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { ScrollToTopDirective } from './shared/directives/scroll-top.directive';
import { InfinityScrollDirective } from './shared/directives/infinity-scroll.directive';
import {HttpClientModule} from '@angular/common/http';
import { ProductItemComponent } from './product-page/components/product-item/product-item.component';
import {ProductResolve} from './detail-page/product.resolve';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignInFormComponent } from './login-page/components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './login-page/components/sign-up-form/sign-up-form.component';
// import { AddAdvertComponent } from './add-advert/add-advert.component';
import { ErrorComponent } from './shared/components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DetailPageComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    InfinityScrollDirective,
    ScrollToTopDirective,
    NotFoundComponent,
    ProductItemComponent,
    SignInFormComponent,
    SignUpFormComponent,
    // AddAdvertComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,
    ProductResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
