import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/Services/EmployeeService/employee-service.service';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
export interface EmployeeTable {
  employeeId: number;
  userName : string;
  email: String;
  profileImage: string;
  mobileNo: number;
  gender : string;
  department : string;
  startDate : string;
  note : string;
  action :string;
}
  
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  EmpList: any = [];
  displayedColumns: string[] = ['employeeId','userName','email','profileImage','mobileNo','gender','department','startDate','note','action'];
  dataSource = this.EmpList;  
  EmpCount: any  
  totallength:any
  data :any

  constructor(private EmpService: EmployeeServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllEmp();
  }
  getAllEmp() {
   
    this.EmpService.getallEmp().subscribe((response: any) => {
      console.log(response);
      this.EmpList = response.data;
      this.dataSource=response.data;
      this.totallength=response.data.length
      this.EmpCount = response.data.length;
      console.log("EmpList======>",this.EmpList);
      console.log(this.EmpCount);
      
    },error=>{console.log(error);
    })
  }

  openDialog(row : any) {
    this.dialog.open(EditEmployeeComponent, {           
      width:'54%',
      height:'500px',
      data:row
    });
  }
  

}
