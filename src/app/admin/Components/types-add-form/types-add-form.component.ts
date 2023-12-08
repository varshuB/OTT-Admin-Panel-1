import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-types-add-form',
  templateUrl: './types-add-form.component.html',
  styleUrls: ['./types-add-form.component.css']
})
export class TypesAddFormComponent implements OnInit {

constructor( public dialogRef: MatDialogRef<TypesAddFormComponent>){}
  

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}

