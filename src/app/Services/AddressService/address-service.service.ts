import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  token:any

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem('token')
  }

  getallAddress() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/GetAllAddress', false, headers)
  }
  updateAddress(data :any){
    console.log("update employee service");
    let header = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })      
      }
      return this.httpService.putService('/UpdateEmployeeAddress',data,  true, header)
  }

  // addAddress(reqPayload: any) {
  //   console.log(reqPayload);
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //     })
  //   }
  //   return this.httpService.postService('/AddAddress', reqPayload, true, headers)
  // }
  addAddress(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //Authorization: this.token
      })
    }   
    return this.httpService.postService('/AddAddress', reqData, true, headers)
  }


 

}
