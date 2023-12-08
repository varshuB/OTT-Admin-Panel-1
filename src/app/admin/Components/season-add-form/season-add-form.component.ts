import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-season-add-form',
  templateUrl: './season-add-form.component.html',
  styleUrls: ['./season-add-form.component.css']
})
export class SeasonAddFormComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SeasonAddFormComponent>){}

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
