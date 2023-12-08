import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-add-form',
  templateUrl: './category-add-form.component.html',
  styleUrls: ['./category-add-form.component.css']
})
export class CategoryAddFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CategoryAddFormComponent>){}

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
