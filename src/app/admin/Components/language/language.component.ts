import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LanguageAddFormComponent } from '../language-add-form/language-add-form.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent  {

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(LanguageAddFormComponent, {
      width: '1000px',
    });

  }
}
