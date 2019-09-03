import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import { Department } from '../../shared/department.model';
import { MasterPagesService } from '../../shared/master-pages.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-department-dialog-box',
  templateUrl: './department-dialog-box.component.html',
  styleUrls: ['./department-dialog-box.component.scss']
})
export class DepartmentDialogBoxComponent {
  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<DepartmentDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Department[]) 
  {
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
