import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  EmpDetail() {
    this.router.navigateByUrl('dashboard/employees')
  };

  Address() {
    this.router.navigateByUrl('/dashboard/address');
  };

  Salary() {
    this.router.navigateByUrl('/dashboard/salary');
  };
  
  Attendance() {
    this.router.navigateByUrl('/dashboard/attend');
  };
  
  Payout() {
    this.router.navigateByUrl('/dashboard/payout');
  };

  logout() {
    this.router.navigateByUrl('/login');
  }   

}
