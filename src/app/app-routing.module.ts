import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './Components/address/address.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './Components/employee-detail/employee-detail.component';
import { RegiterComponent } from './Components/login/regiter/regiter.component';
import { PayoutComponent } from './Components/payout/payout.component';
import { SalaryComponent } from './Components/salary/salary.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';

const routes: Routes = [
  {path:'register',component:RegiterComponent},
  {path:'login',component:UserloginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'employees',component:EmployeeDetailComponent},  
  {path:'address',component:AddressComponent},
  {path:'salary',component:SalaryComponent},
  {path:'attend',component:AttendanceComponent},  
  {path:'payout',component:PayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
