import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
export interface EmployeeTable {
  User_Name : string;
  Email_ID: String;
  Profile_Img: string;
  Mobile_No: number;
  Gender : string;
  Department : string;
  Start_Date : string;
  Note : string;
}
  
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  displayedColumns: string[] = ['User Name','Email ID','Profile Img','Mobile No','Gender','Department','Start Date','Note'];
  dataSource = EMPTY;

  constructor() { }

  ngOnInit(): void {
  }

}
