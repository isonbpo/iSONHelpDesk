import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductType } from '../../shared/product-type.model';

@Component({
  selector: 'app-product-type-dialog-box',
  templateUrl: './product-type-dialog-box.component.html',
  styleUrls: ['./product-type-dialog-box.component.scss']
})
export class ProductTypeDialogBoxComponent {
  action:string;
  local_data:any;
  
  constructor(
    public dialogRef: MatDialogRef<ProductTypeDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProductType[]) {
      console.log("In the dailog box with data");
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
