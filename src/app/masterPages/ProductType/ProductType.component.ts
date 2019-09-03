import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ProductType } from '../shared/product-type.model';
import { ProductTypeDialogBoxComponent } from './product-type-dialog-box/product-type-dialog-box.component';




@Component({
  selector: 'app-productType',
  templateUrl: './productType.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class ProductTypeComponent implements OnInit {
  displayedColumns: string[] = ['ProductTypeName', 'ProductType', 'ProductTypeCategory', 'ProductDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: ProductType[];
  dataavailbale: Boolean = false;
  tempdpt: ProductType
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {

    
    this.Service.getAllProductType().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.sort = this.sort;
        this.Service.formModelProductType.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addProductType().subscribe(
      res=>
        {
          this.LoadData();
        });
  }

  openDialog(action,obj) {
    obj.action = action;
      
      const dialogRef = this.dialog.open(ProductTypeDialogBoxComponent, {
        width: '800px',
        data:obj
        
      });
      
      dialogRef.afterClosed().subscribe(result => {
        
        if(result.event == 'Update'){
          this.updateRowData(result.data);
        }
      });
    }

    updateRowData(row_obj){
      this.dataSource = this.dptlist.filter((value,key)=>{
        if(value.product_type_id == row_obj.product_type_id){
          value.product_type_name = row_obj.product_type_name;
          value.product_type = row_obj.product_type;
          value.product_category_name = row_obj.product_category_name;
          value.product_discription = row_obj.product_discription;
          value.product_type_enabled = row_obj.product_type_enabled;

          this.Service.updateProductType(value.product_type_id,value.product_type_name,value.product_type,value.product_category_name,value.product_discription,value.product_type_enabled).subscribe();        
        }
        this.LoadData();
      });
    }

    getError(el) {
      switch (el) {
        case 'product_type_name':
          if (this.Service.formModelProductType.get('product_type_name').hasError('required')) {
            return 'Product Type name is required';
          }
          break;
        case 'product_type':
          if (this.Service.formModelProductType.get('product_type').hasError('required')) {
            return 'Product Type is required';
          }
          break;
          case 'product_vender_name':
            if (this.Service.formModelProducts.get('product_vender_name').hasError('required')) {
              return 'Vender name is required';
          }
          break;
          case 'product_category_name':
            if (this.Service.formModelProductType.get('product_category_name').hasError('required')) {
              return 'Category is required';
          }
          break;
          case 'product_discription':
            if (this.Service.formModelProductType.get('product_discription').hasError('required')) {
              return 'Discription is required';
          }
          break;
          case 'product_type_enabled':
            if (this.Service.formModelProductType.get('product_type_enabled').hasError('required')) {
              return 'Status is required';
          }
          break;
        default:
          return '';
      }
    }    

}