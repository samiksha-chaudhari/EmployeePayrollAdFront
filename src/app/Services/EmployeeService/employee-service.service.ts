import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  token:any

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem('token')
  }

  registerUserService(reqPayload: any) {
    console.log(reqPayload);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })

    }
    return this.httpService.postService('/register', reqPayload, true, headers)
  }

  loginUserService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //Authorization: this.token
      })
    }   
    return this.httpService.postService('/login', reqData, true, headers)
  }

  // GetAllEmployess()(reqPayload: any) {
  //   console.log(reqPayload);
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //     })

  //   }
  //   return this.httpService.postService('/GetAllEmployee', reqPayload, true, headers)
  // }

  getallEmp() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/GetAllEmployee', false, headers)
  }


}
