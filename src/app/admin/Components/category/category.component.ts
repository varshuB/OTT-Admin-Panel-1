import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CategoryAddFormComponent } from '../category-add-form/category-add-form.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent  {
  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(CategoryAddFormComponent, {
      width: '1000px',
    });

  }
}
