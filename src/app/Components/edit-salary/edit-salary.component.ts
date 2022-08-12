import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SalaryServiceService } from 'src/app/Services/SalaryService/salary-service.service';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.scss']
})
export class EditSalaryComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  submitted = false;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, private salary :SalaryServiceService,
  private router: Router, private snackbar :MatSnackBar ,
  private dialogRef : MatDialogRef<EditSalaryComponent>) { }

  ngOnInit(): void { this.editForm = this.formBuilder.group({
    employeeId:['', [Validators.required, Validators.pattern("[0-9]")]],
    salaryDate: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    paySlip: ['', [Validators.required]],
    service: ['advance']
  });
  console.log(this.editData);
  if(this.editData){
    this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
    this.editForm.controls['salaryDate'].setValue(this.editData.salaryDate);
    this.editForm.controls['amount'].setValue(this.editData.amount);
    this.editForm.controls['paySlip'].setValue(this.editData.paySlip);
  }
}
// onSubmit() {    
//  if(this.editForm.valid){
//   this.salary.addSalary(this.editForm.value).subscribe((response: any) => {
//     console.log(response);
//     this.snackbar.open("Registration Successfull", '', {
//       duration: 2000
//     })
    
//   }, error => {
//     console.log(error);
//   });
//  }
// }

onSubmit() {
  this.submitted = true
  let reqData = {
    service: this.editForm.value.service,
    employeeId: this.editForm.value.employeeId,
    salaryDate: this.editForm.value.salaryDate,
    amount: this.editForm.value.amount,
    paySlip: this.editForm.value.paySlip
  }
  console.log(this.editForm.value);
  if (this.editForm.valid) {
    
      console.log("user");
      console.log("valid");
      this.salary.addSalary(reqData).subscribe((response: any) => {
        console.log("add data **********************",response);
        this.snackbar.open("Registration Successfull", '', {
          duration: 2000
        })
        
      }, error => {
        console.log(error);
      });
      
  }
  else {
    console.log("invalid");

  }
}

OnClose(){
  this.router.navigateByUrl('/dashboard/address');
}

}
