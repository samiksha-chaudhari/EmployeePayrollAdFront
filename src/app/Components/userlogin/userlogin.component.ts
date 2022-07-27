import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/Services/EmployeeService/employee-service.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: Router, private userservice: EmployeeServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onLogin(){ let reqData = {
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  }
  console.log(this.loginForm.value);
  if (this.loginForm.valid) {
    
      console.log("valid");
      console.log("User");
      this.userservice.loginUserService(reqData).subscribe((result: any) => 
      {
        console.log(result);
        //localStorage.setItem('token', result.result.accessToken);
        this.snackBar.open("Login Successfull", '', {
          duration: 2000
        })
        this.route.navigateByUrl('/dashboard')  
      }, 
      error => {
        console.log(error);
        this.snackBar.open("Enter Valid Data", '', {
          duration: 2000
        })

      })
  }
  }
  onRegister(){
    this.route.navigateByUrl("/register")
  }

}
