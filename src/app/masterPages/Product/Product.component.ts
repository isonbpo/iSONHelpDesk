import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Products } from '../shared/products.model';
import { ProductDialogBoxComponent } from './product-dialog-box/product-dialog-box.component';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['ProductName', 'ProductType' , 'ProductVenderName', 'ProductManufacturerName', 'ProductPartNo', 'ProductPartDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: Products[];
  dataavailbale: Boolean = false;
  tempdpt: Products
  dataSource :any;
  productTypes : {}; 

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog, private toastr:ToastrService){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
    this.getMasterList();
  }
  
  LoadData() {

    
    this.Service.getAllProducts().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.sort = this.sort;
        this.Service.formModelProducts.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addProduct().subscribe(
      res=>
        {
          this.toastr.success('Added Successfully', 'Product');
          this.LoadData();
          
        });
  }


  getMasterList()
  {
    this.Service.getAllProductType().subscribe(
      data => this.productTypes = data);
  }

  openDialog(action,obj) {
    obj.action = action;
      
      const dialogRef = this.dialog.open(ProductDialogBoxComponent, {
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
        
        
        if(value.product_id == row_obj.product_id){
          value.product_name = row_obj.product_name;
          value.product_type = row_obj.product_type;
          value.product_vender_name = row_obj.product_vender_name;
          value.product_manufacturer_name = row_obj.product_manufacturer_name;
          value.product_part_no = row_obj.product_part_no;
          value.product_enabled = row_obj.product_enabled;
          value.product_part_discription = row_obj.product_part_discription;
          
          this.Service.updateProducts(value.product_id,value.product_name,value.product_type_id,value.product_vender_name,value.product_manufacturer_name
            ,value.product_part_no,value.product_enabled,value.product_part_discription).subscribe();        
            this.toastr.info('Updated Successfully', 'Product');
        }
        this.LoadData();
      });
    }


    getError(el) {
      switch (el) {
        case 'product_name':
          if (this.Service.formModelProducts.get('product_name').hasError('required')) {
            return 'Product name is required';
          }
          break;
        case 'product_type_name':
          if (this.Service.formModelProducts.get('product_type_name').hasError('required')) {
            return 'Product Type is required';
          }
          break;
          case 'product_vender_name':
            if (this.Service.formModelProducts.get('product_vender_name').hasError('required')) {
              return 'Vender name is required';
          }
          break;
          case 'product_manufacturer_name':
            if (this.Service.formModelProducts.get('product_manufacturer_name').hasError('required')) {
              return 'Manufacturer name is required';
          }
          break;
          case 'product_part_no':
            if (this.Service.formModelProducts.get('product_part_no').hasError('required')) {
              return 'Part No. is required';
          }
          break;
          case 'product_enabled':
            if (this.Service.formModelProducts.get('product_enabled').hasError('required')) {
              return 'Status is required';
          }
          break;
          case 'product_part_discription':
            if (this.Service.formModelProducts.get('product_part_discription').hasError('required')) {
              return 'Discription is required';
          }
          break;
        default:
          return '';
      }
    }

}