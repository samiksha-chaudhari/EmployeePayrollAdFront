import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeServiceService } from 'src/app/Services/EmployeeService/employee-service.service';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { EditAttendanceComponent } from '../edit-attendance/edit-attendance.component';
export interface AddressTable {
  employeeId: number;
  presentDay : number;
  absentDay: number;
  dailySalary: number;
  action :string;
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  AttendList: any = [];
  displayedColumns: string[] = ['employeeId','presentDay','absentDay','dailySalary','action'];
  dataSource = this.AttendList;  
  Count: any  
  totallength:any
  data :any

  constructor(private emp :EmployeeServiceService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAttend();
  }

  getAttend() {   
    this.emp.getallEmpAttend().subscribe((response: any) => {
      console.log(response);
      this.AttendList = response.data;
      this.dataSource=response.data;
      this.totallength=response.data.length
      this.Count = response.data.length;
      console.log("EmpList======>",this.Count);
      console.log(this.Count);
      
    },error=>{console.log(error);
    })
  }
  onAdd(){
    this.dialog.open(EditAttendanceComponent, {           
      width:'26%',
      height:'450px'
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log(val);        
        this.getAttend();
        console.log("ADDRESS UPDATED************")
      }
    })
  }


  openDialog(row : any) {
    this.dialog.open(EditAttendanceComponent, {           
      width:'26%',
      height:'450px',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log("EMP UPDATED************")
        this.getAttend();
      }
    })
  }


}
