import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Products } from '../../shared/products.model';
import { MasterPagesService } from '../../shared/master-pages.service';

@Component({
  selector: 'app-product-dialog-box',
  templateUrl: './product-dialog-box.component.html',
  styleUrls: ['./product-dialog-box.component.scss']
})
export class ProductDialogBoxComponent implements OnInit{
  action:string;
  local_data:any;
  productTypes : {}; 
  constructor(private Service:MasterPagesService,
    public dialogRef: MatDialogRef<ProductDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Products[]) {
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

  ngOnInit()
  {
    this.getMasterList()
  }
  getMasterList()
  {
    this.Service.getAllProductType().subscribe(
      data => this.productTypes = data);
  }
}
