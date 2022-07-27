import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressServiceService } from 'src/app/Services/AddressService/address-service.service';
import { EditAddressComponent } from '../edit-address/edit-address.component';
export interface AddressTable {
  employeeId: number;
  address : string;
  city: String;
  state: string;
  action :string;
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  AddressList: any = [];
  displayedColumns: string[] = ['employeeId','address','city','state','action'];
  dataSource = this.AddressList;  
  AddressCount: any  
  totallength:any
  data :any

  constructor(private address :AddressServiceService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAddress();
  }
  getAddress() {   
    this.address.getallAddress().subscribe((response: any) => {
      console.log(response);
      this.AddressList = response.data;
      this.dataSource=response.data;
      this.totallength=response.data.length
      this.AddressCount = response.data.length;
      console.log("EmpList======>",this.AddressList);
      console.log(this.AddressCount);
      
    },error=>{console.log(error);
    })
  }

  openDialog(row : any) {
    this.dialog.open(EditAddressComponent, {           
      width:'26%',
      height:'450px',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        console.log("ADDRESS UPDATED************")
        this.getAddress();
      }
    })
  }
}
