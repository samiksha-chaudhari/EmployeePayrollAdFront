import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './Authguard/authguard.guard';
import { AddressComponent } from './Components/address/address.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './Components/employee-detail/employee-detail.component';
import { RegiterComponent } from './Components/login/regiter/regiter.component';
import { PayoutComponent } from './Components/payout/payout.component';
import { SalaryComponent } from './Components/salary/salary.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  {path:'register',component:RegiterComponent},
  {path:'login',component:UserloginComponent},
  {path:'dashboard',component:DashboardComponent},  
  {path:'edit',component:EditEmployeeComponent}, 
  
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard],
   children:[
    {path:'',redirectTo:"dashboard",pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'employees',component:EmployeeDetailComponent},  
    {path:'address',component:AddressComponent},
    {path:'salary',component:SalaryComponent},
    {path:'attend',component:AttendanceComponent}, 
    {path:'payout',component:PayoutComponent}, 
    
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
