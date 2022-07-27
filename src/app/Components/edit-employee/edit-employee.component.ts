import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  editForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      note: ['', [Validators.required]],
      gender:['', [Validators.required]],
      image:['', [Validators.required]],
      department:['', [Validators.required]],
      date:['', [Validators.required]]
    });
    console.log(this.editData);
    if(this.editData){
      this.editForm.controls['fullName'].setValue(this.editData.userName);
      this.editForm.controls['email'].setValue(this.editData.email);
      this.editForm.controls['mobileNumber'].setValue(this.editData.mobileNo);
      this.editForm.controls['note'].setValue(this.editData.note);
      this.editForm.controls['gender'].setValue(this.editData.gender);
      this.editForm.controls['image'].setValue(this.editData.profileImage);
      this.editForm.controls['department'].setValue(this.editData.department);
      this.editForm.controls['date'].setValue(this.editData.startDate);
    }
  }

  onSubmit(){}

}
