import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value = '';
  searchword: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  EmpDetail() {
    this.router.navigateByUrl('/dashboard');
  };

  Address() {
    this.router.navigateByUrl('/dashboard');
  };

  Salary() {
    this.router.navigateByUrl('/dashboard');
  };
  
  Attendance() {
    this.router.navigateByUrl('/dashboard');
  };
  
  Payout() {
    this.router.navigateByUrl('/dashboard');
  };

  logout() {
    this.router.navigateByUrl('/login');
  }   

}
