import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-payout',
  templateUrl: './edit-payout.component.html',
  styleUrls: ['./edit-payout.component.scss']
})
export class EditPayoutComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  actionBtn : string ='Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, 
  private router: Router,
  private dialogRef : MatDialogRef<EditPayoutComponent>) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      salaryId:['', [Validators.required]],
      ctc: ['', [Validators.required]],
      pf: ['', [Validators.required]],
      tax: ['', [Validators.required]]
    });
    console.log(this.editData);
    if(this.editData){
      this.editForm.controls['salaryId'].setValue(this.editData.salaryId)
      this.editForm.controls['ctc'].setValue(this.editData.ctc);
      this.editForm.controls['pf'].setValue(this.editData.pf);
      this.editForm.controls['tax'].setValue(this.editData.tax);
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
