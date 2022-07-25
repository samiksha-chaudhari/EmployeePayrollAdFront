import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      note: ['', [Validators.required, Validators.minLength(250)]],
      service: ['advance']
    });
  }

  onLogin(){
    this.route.navigateByUrl("/login")
  }

  onSignup(){
    this.route.navigateByUrl("/login")
  }

}
