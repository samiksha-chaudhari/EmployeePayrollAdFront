import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryServiceService {
  token:any

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem('token')
  }

  getallSalary() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.getService('/GetAllSalary', false, headers)
  }

}
