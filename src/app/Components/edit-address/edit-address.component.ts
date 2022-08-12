import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressServiceService } from 'src/app/Services/AddressService/address-service.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {
  editForm!: FormGroup;
  isInputShown: boolean = false
  actionBtn: string = 'Save'

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
    private router: Router, private address: AddressServiceService, private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<EditAddressComponent>) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
    });
    console.log(this.editData);
    if (this.editData) {
      this.editForm.controls['employeeId'].setValue(this.editData.employeeId)
      this.editForm.controls['address'].setValue(this.editData.address);
      this.editForm.controls['city'].setValue(this.editData.city);
      this.editForm.controls['state'].setValue(this.editData.state);
    }
    this.onSave();
  }
  onSubmit() {
    console.log(this.editForm.value);
    this.address.updateAddress(this.editForm.value).subscribe((result: any) => {
      console.log("updated employee details", result);
      this.dialogRef.close(result);
    })
  }
  onSave() {
    if (this.editForm.valid) {
      this.address.addAddress(this.editForm.value).subscribe((reqData: any) => {
        console.log(reqData);
        this.snackbar.open("Added Successfull", '', {
          duration: 2000
        })
      }, error => {
        console.log(error);
      });
    }
  }
}
