import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coupons-add-form',
  templateUrl: './coupons-add-form.component.html',
  styleUrls: ['./coupons-add-form.component.css']
})
export class CouponsAddFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CouponsAddFormComponent>){}

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
