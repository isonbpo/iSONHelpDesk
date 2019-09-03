import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AssetCategory } from '../../shared/asset-category.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-asset-category-dialog-box',
  templateUrl: './asset-category-dialog-box.component.html',
  styleUrls: ['./asset-category-dialog-box.component.scss']
})
export class AssetCategoryDialogBoxComponent {

  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<AssetCategoryDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AssetCategory[]) {
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
