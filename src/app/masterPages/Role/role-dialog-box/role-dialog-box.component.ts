import { Component, OnInit, Inject, Optional } from '@angular/core';
import { Role } from '../../shared/role.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-role-dialog-box',
  templateUrl: './role-dialog-box.component.html',
  styleUrls: ['./role-dialog-box.component.scss']
})
export class RoleDialogBoxComponent {
  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<RoleDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Role[]) {
    console.log(data);
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
