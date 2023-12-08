import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TypesAddFormComponent } from '../types-add-form/types-add-form.component';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent{

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(TypesAddFormComponent, {
      width: '1000px',
    });

  }
}
