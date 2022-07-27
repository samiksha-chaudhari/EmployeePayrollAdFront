import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/Services/EmployeeService/employee-service.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  submitted = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: Router, private userservice: EmployeeServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {    
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      note: ['', [Validators.required]],
      gender:['', [Validators.required]],
      image:['', [Validators.required]],
      department:['', [Validators.required]],
      date:['', [Validators.required]],
      service: ['advance']
    });
  }

  onLogin(){
    this.route.navigateByUrl("/login")
  }
 
  onRegister() {
    this.submitted = true
    let reqData = {
      service: this.signupForm.value.service,
      userName: this.signupForm.value.fullName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      mobileNo: this.signupForm.value.mobileNumber,
      profileImage: this.signupForm.value.image,
      gender: this.signupForm.value.gender,
      department: this.signupForm.value.department,
      startDate: this.signupForm.value.date,
      note: this.signupForm.value.note
    }
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      
        console.log("user");
        console.log("valid");
        this.userservice.registerUserService(reqData).subscribe((response: any) => {
          console.log(response);
          this.snackBar.open("Registration Successfull", '', {
            duration: 2000
          })
          this.route.navigateByUrl('/login') 
        }, error => {
          console.log(error);
        });
        
    }
    else {
      console.log("invalid");

    }
  }

}
