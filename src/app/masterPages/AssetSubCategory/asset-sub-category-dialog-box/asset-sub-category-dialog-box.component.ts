import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetSubCategory } from '../../shared/asset-sub-category.model';
import { MasterPagesService } from '../../shared/master-pages.service';

@Component({
  selector: 'app-asset-sub-category-dialog-box',
  templateUrl: './asset-sub-category-dialog-box.component.html',
  styleUrls: ['./asset-sub-category-dialog-box.component.scss']
})
export class AssetSubCategoryDialogBoxComponent implements OnInit{
  action:string;
  local_data:any;
  assetscategories : {}; 
  constructor(private Service:MasterPagesService,
    public dialogRef: MatDialogRef<AssetSubCategoryDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AssetSubCategory[]) {
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

  ngOnInit()
  {
    this.getMasterList()
  }
  getMasterList()
  {
    this.Service.getAllAssetCategory().subscribe(
      data =>{this.assetscategories = data
      console.log(data);});
  }

}
