import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeasonAddFormComponent } from '../season-add-form/season-add-form.component';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent  {

  constructor(public dialog: MatDialog) {}


  openDialog() {
    const dialogRef = this.dialog.open(SeasonAddFormComponent, {
      width: '1000px',
    });

  }

}
