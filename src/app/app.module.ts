import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {ProductDataService} from './services/productData.service';
import {LoggerService} from './services/log.service';
import {ProductPageComponent} from './product-page/product-page.component';
import {InfinityScrollDirective} from './directives/infinityScroll.directive';
import {ScrollToTopDirective} from './directives/scrollToTop.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DetailPageComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    InfinityScrollDirective,
    ScrollToTopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductDataService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
