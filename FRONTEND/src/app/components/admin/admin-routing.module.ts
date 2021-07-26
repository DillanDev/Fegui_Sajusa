import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  
  {
    path:'',
    children:[
      {path:'login',component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'**', redirectTo: 'login'}
    ] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
