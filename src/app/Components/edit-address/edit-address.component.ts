import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  editForm!: FormGroup; 
  isInputShown :boolean=false
  actionBtn : string ='Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any, 
  private router: Router,
  private dialogRef : MatDialogRef<EditAddressComponent>) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      employeeId:['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
    });
    console.log(this.editData);
    if(this.editData){
      this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
      this.editForm.controls['address'].setValue(this.editData.address);
      this.editForm.controls['city'].setValue(this.editData.city);
      this.editForm.controls['state'].setValue(this.editData.state);
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
