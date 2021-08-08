import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProductsComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { SliderProductsComponent } from './components/slider-products/slider-products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ArticleComponent } from './pages/article/article.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleProductComponent } from './components/article-product/article-product.component';




@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent,
    BlogComponent,
    ProductsComponent,
    ContactComponent,
    NotFoundComponent,
    LoginRegisterComponent,
    SliderProductsComponent,
    CategoriesComponent,
    ArticleComponent,
    BreadcrumbComponent,
    ArticleCardComponent,
    ArticleProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class EcommerceModule { }
