import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.scss']
})
export class EditSalaryComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  actionBtn : string ='Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, 
  private router: Router,
  private dialogRef : MatDialogRef<EditSalaryComponent>) { }

  ngOnInit(): void { this.editForm = this.formBuilder.group({
    employeeId:['', [Validators.required]],
    salaryDate: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    paySlip: ['', [Validators.required]]
  });
  console.log(this.editData);
  if(this.editData){
    this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
    this.editForm.controls['salaryDate'].setValue(this.editData.salaryDate);
    this.editForm.controls['amount'].setValue(this.editData.amount);
    this.editForm.controls['paySlip'].setValue(this.editData.paySlip);
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
