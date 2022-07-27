import { Component, OnInit } from '@angular/core';
import { PayoutServicesService } from 'src/app/Services/PayoutServices/payout-services.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPayoutComponent } from '../edit-payout/edit-payout.component';
export interface AddressTable {
  salaryId: number;
  ctc : number;
  pf: number;
  tax: number;
  action :string;
}

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss']
})
export class PayoutComponent implements OnInit {
  PayoutList: any = [];
  displayedColumns: string[] = ['salaryId','ctc','pf','tax','action'];
  dataSource = this.PayoutList;  
  Count: any  
  totallength:any
  data :any

  constructor(private pay :PayoutServicesService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPay();
  }

  getPay() {   
    this.pay.getallPayout().subscribe((response: any) => {
      console.log(response);
      this.PayoutList = response.data;
      this.dataSource=response.data;
      this.totallength=response.data.length
      this.Count = response.data.length;
      console.log("EmpList======>",this.Count);
      console.log(this.Count);
      
    },error=>{console.log(error);
    })
  }

  openDialog(row : any) {
    this.dialog.open(EditPayoutComponent, {           
      width:'26%',
      height:'450px',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log("EMP UPDATED************")
        this.getPay();
      }
    })
  }

}
