import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import { Team } from '../../shared/team.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-team-dialog-box',
  templateUrl: './team-dialog-box.component.html',
  styleUrls: ['./team-dialog-box.component.scss']
})
export class TeamDialogBoxComponent {
action:string;
local_data:any;

constructor(
  public dialogRef: MatDialogRef<TeamDialogBoxComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: Team[]) {
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
