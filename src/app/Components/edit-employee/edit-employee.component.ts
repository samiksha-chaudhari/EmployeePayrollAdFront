import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/Services/EmployeeService/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  actionBtn : string ='Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, private empService : EmployeeServiceService,
  private router :Router,
  private dialogRef : MatDialogRef<EditEmployeeComponent>) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      employeeId:[''],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      note: ['', [Validators.required]],
      gender:['', [Validators.required]],
      profileImage:['', [Validators.required]],
      department:['', [Validators.required]],
      startDate:['', [Validators.required]]
    });
    console.log(this.editData);
    if(this.editData){
      this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
      this.editForm.controls['userName'].setValue(this.editData.userName);
      this.editForm.controls['email'].setValue(this.editData.email);
      this.editForm.controls['mobileNo'].setValue(this.editData.mobileNo);
      this.editForm.controls['note'].setValue(this.editData.note);
      this.editForm.controls['gender'].setValue(this.editData.gender);
      this.editForm.controls['profileImage'].setValue(this.editData.profileImage);
      this.editForm.controls['department'].setValue(this.editData.department);
      this.editForm.controls['startDate'].setValue(this.editData.startDate);
    }
  }
 
  onSubmit() {    
    console.log(this.editForm.value);
    this.empService.update(this.editForm.value).subscribe((result: any) => {
      console.log("updated employee details", result);      
      this.dialogRef.close(result);
      this.router.navigateByUrl('dashboard/employees')
    })
  }

}
