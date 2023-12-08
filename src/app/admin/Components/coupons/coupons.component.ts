import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CouponsAddFormComponent } from '../coupons-add-form/coupons-add-form.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent  {

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(CouponsAddFormComponent, {
      width: '1000px',
    });

  }

}
