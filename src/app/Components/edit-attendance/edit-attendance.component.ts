import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.scss']
})
export class EditAttendanceComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  actionBtn : string ='Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, 
  private router: Router,
  private dialogRef : MatDialogRef<EditAttendanceComponent>) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
    employeeId:['', [Validators.required]],
    presentDay: ['', [Validators.required]],
    absentDay: ['', [Validators.required]],
    dailySalary: ['', [Validators.required]]
  });
  console.log(this.editData);
  if(this.editData){
    this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
    this.editForm.controls['presentDay'].setValue(this.editData.presentDay);
    this.editForm.controls['absentDay'].setValue(this.editData.absentDay);
    this.editForm.controls['dailySalary'].setValue(this.editData.dailySalary);
  }
}
onSubmit() {    
  console.log(this.editForm.value);
  // this.empService.update(this.editForm.value).subscribe((result: any) => {
  //   console.log("updated employee details", result);      
  //   this.dialogRef.close(result);
  // })
}

OnClose(){
  this.router.navigateByUrl('/dashboard/address');
}

}
