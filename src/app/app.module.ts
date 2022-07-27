import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule, _MatSnackBarBase} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RegiterComponent } from './Components/login/regiter/regiter.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { EmployeeDetailComponent } from './Components/employee-detail/employee-detail.component';
import {MatTableModule} from '@angular/material/table';
import { AddressComponent } from './Components/address/address.component';
import { SalaryComponent } from './Components/salary/salary.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { PayoutComponent } from './Components/payout/payout.component';
import { AuthguardServiceService } from './Services/AuthguardService/authguard-service.service';
import { HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './Components/edit-employee/edit-employee.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegiterComponent,
    UserloginComponent,
    EmployeeDetailComponent,
    AddressComponent,
    SalaryComponent,
    AttendanceComponent,
    PayoutComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [ 
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
