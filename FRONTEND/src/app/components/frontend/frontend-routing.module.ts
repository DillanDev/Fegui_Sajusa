import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './body/article-detail/article-detail.component';
import { ArticleListComponent } from './body/article-list/article-list.component';
import { CartComponent } from './body/cart/cart.component';
import { ConsultantComponent } from './body/consultant/consultant.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MyAccountComponent } from './body/my-account/my-account.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductListComponent } from './body/product-list/product-list.component';
import { RegisterComponent } from './body/register/register.component';
import { CheckoutComponent } from './body/checkout/checkout.component';


const routes: Routes = [
  
    
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'consultant',component: ConsultantComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'my-account',component: MyAccountComponent},
  {path:'product-list',component: ProductListComponent},
  {path:'product-detail',component: ProductDetailComponent},
  {path:'cart',component: CartComponent},
  {path:'article-list',component: ArticleListComponent},
  {path:'article-detail',component: ArticleDetailComponent},
  {path:'checkout',component: CheckoutComponent},
    

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
