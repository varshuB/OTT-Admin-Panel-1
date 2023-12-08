import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-language-add-form',
  templateUrl: './language-add-form.component.html',
  styleUrls: ['./language-add-form.component.css']
})
export class LanguageAddFormComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<LanguageAddFormComponent>){}

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }

}
