import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { SalaryServiceService } from 'src/app/Services/SalaryService/salary-service.service';
import { EditSalaryComponent } from '../edit-salary/edit-salary.component';
export interface AddressTable {
  employeeId: number;
  salaryDate : string;
  amount: String;
  paySlip: string;
  action :string;
}

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  SalaryList: any = [];
  displayedColumns: string[] = ['employeeId','salaryDate','amount','paySlip','action'];
  dataSource = this.SalaryList;  
  SalaryCount: any  
  totallength:any
  data :any
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private salary :SalaryServiceService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSalary();
  }
  getSalary() {   
    this.salary.getallSalary().subscribe((response: any) => {
      console.log(response);
      this.SalaryList = response.data;
      this.dataSource=response.data;
      this.totallength=response.data.length
      this.SalaryCount = response.data.length;
      console.log("EmpList======>",this.SalaryList);
      console.log(this.SalaryCount);
      
    },error=>{console.log(error);
    })
  }
  onAdd(){
    this.dialog.open(EditSalaryComponent, {           
      width:'26%',
      height:'450px'
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log(val);        
        this.getSalary();
        console.log("ADDRESS UPDATED************")
      }
    })
  }


  openDialog(row : any) {
    this.dialog.open(EditSalaryComponent, {           
      width:'26%',
      height:'450px',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log("SALARY UPDATED************")
        this.getSalary();
      }
    })
  }

}
