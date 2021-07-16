import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './body/article-list/article-list.component';
import { CartComponent } from './body/cart/cart.component';
import { ConsultantComponent } from './body/consultant/consultant.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MyAccountComponent } from './body/my-account/my-account.component';
import { ProductListComponent } from './body/product-list/product-list.component';


const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'consultant',component: ConsultantComponent},
  {path:'login-register',component: LoginComponent},
  {path:'my-account',component: MyAccountComponent},
  {path:'product-list',component: ProductListComponent},
  {path:'cart',component: CartComponent},
  {path:'article-list',component: ArticleListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
