import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SoftwareType } from '../../shared/software-type.model';

@Component({
  selector: 'app-software-type-dialog-box',
  templateUrl: './software-type-dialog-box.component.html',
  styleUrls: ['./software-type-dialog-box.component.scss']
})
export class SoftwareTypeDialogBoxComponent {
  action:string;
  local_data:any;
  
  constructor(
    public dialogRef: MatDialogRef<SoftwareTypeDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: SoftwareType[]) {
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
