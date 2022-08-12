import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  BaseUrl=environment.BaseUrl;

  constructor(private httpClient:HttpClient) { }
  postService(url: string = '', reqPayload: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log(reqPayload);
    return this.httpClient.post(this.BaseUrl + url, reqPayload, token && httpOptions)

  } 
  
  getService(url: string = '', token: boolean = false, httpOptions: any = null) {
    return this.httpClient.get(this.BaseUrl + url, token && httpOptions)
  }

  putService(url: string = '', reqPayload: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log(reqPayload);
    return this.httpClient.put(this.BaseUrl + url, reqPayload, token && httpOptions)

  }
}
