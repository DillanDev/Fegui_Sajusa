import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './bottom/footer/footer.component';
import { HomeComponent } from './body/home/home.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { HeaderComponent } from './top/header/header.component';
import { SliderProductComponent } from './body/slider-product/slider-product.component';
import { LoginComponent } from './body/login/login.component';
import { MyAccountComponent } from './body/my-account/my-account.component';
import { ProductListComponent } from './body/product-list/product-list.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { CartComponent } from './body/cart/cart.component';
import { ConsultantComponent } from './body/consultant/consultant.component';
import { ArticleListComponent } from './body/article-list/article-list.component';
import { ArticleDetailComponent } from './body/article-detail/article-detail.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    SliderProductComponent,
    LoginComponent,
    MyAccountComponent,
    ProductListComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CartComponent,
    ConsultantComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
