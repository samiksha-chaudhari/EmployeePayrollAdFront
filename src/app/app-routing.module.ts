import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegiterComponent } from './Components/login/regiter/regiter.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';

const routes: Routes = [
  {path:'register',component:RegiterComponent},
  {path:'login',component:UserloginComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
