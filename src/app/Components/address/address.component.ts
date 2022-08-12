import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource(this.AddressList);;  
  AddressCount: any  
  totallength:any
  data :any

  constructor(private address :AddressServiceService,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAddress();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  onAdd(){
    this.dialog.open(EditAddressComponent, {           
      width:'26%',
      height:'450px'
    }).afterClosed().subscribe(val=>{
      if(val=='add'){
        console.log(val);        
        this.getAddress();
        console.log("ADDRESS UPDATED************")
      }
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
