import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Designation } from '../../shared/designation.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-designationt-dialog-box',
  templateUrl: './designationt-dialog-box.component.html',
  styleUrls: []
})
export class DesignationtDialogBoxComponent {

  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DesignationtDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Designation[]) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
