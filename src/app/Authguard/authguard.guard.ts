import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardServiceService } from '../Services/AuthguardService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  

  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}

  canActivate() :boolean
    {
      if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
      }   
    return this.Authguardservice.gettoken(); 
  }
  
}
