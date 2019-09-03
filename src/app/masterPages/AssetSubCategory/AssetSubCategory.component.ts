import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AssetSubCategory } from '../shared/asset-sub-category.model';
import { AssetSubCategoryDialogBoxComponent } from './asset-sub-category-dialog-box/asset-sub-category-dialog-box.component';



@Component({
  selector: 'app-assetSubCategory',
  templateUrl: './assetSubCategory.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class AssetSubCategoryComponent implements OnInit {
  displayedColumns: string[] = ['AssetSubCategoryName', 'AssetSubCategoryDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dptlist: AssetSubCategory[];
  dataavailbale: Boolean = false;
  tempdpt: AssetSubCategory
  dataSource :any;
  assetscategories:{}; 

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    this.LoadData();
    this.getMasterList();
  }
  
  LoadData() {
    this.Service.getAllAssetSubCategory().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.sort = this.sort;
        this.Service.formModelAssetSubCategory.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addAssetSubCategory().subscribe(
      res=>
        {
          this.LoadData();
        });
  }

  getMasterList()
  {
    this.Service.getAllAssetCategory().subscribe(
      data => this.assetscategories = data);
  }

  openDialog(action,obj) {
    obj.action = action;
      const dialogRef = this.dialog.open(AssetSubCategoryDialogBoxComponent, {
        width: '550px',
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
        if(value.asset_sub_category_id == row_obj.asset_sub_category_id){
          value.asset_category_id = row_obj.asset_category_id;
          value.asset_category_name = row_obj.asset_category_name;
          value.asset_sub_category_name = row_obj.asset_sub_category_name;
          value.asset_sub_category_enabled = row_obj.asset_sub_category_enabled;
          value.asset_sub_category_discription = row_obj.asset_sub_category_discription;
          this.Service.updateAssetSubCategory(value.asset_category_id, value.asset_category_name, value.asset_sub_category_id,value.asset_sub_category_name,value.asset_sub_category_enabled, value.asset_sub_category_discription).subscribe();        
        }
        this.LoadData();
      });
    }
    getError(el) {
      switch (el) {
        case 'asset_category_name':
          if (this.Service.formModelAssetSubCategory.get('asset_category_name').hasError('required')) {
            return 'Asset Category name is required';
          }
          break;
          case 'asset_sub_category_name':
            if (this.Service.formModelAssetSubCategory.get('asset_sub_category_name').hasError('required')) {
              return 'Status is required';
          }
          break;
        case 'asset_sub_category_enabled':
          if (this.Service.formModelAssetSubCategory.get('asset_sub_category_enabled').hasError('required')) {
            return 'Status is required';
          }
          break;
          case 'asset_sub_category_discription':
            if (this.Service.formModelAssetSubCategory.get('asset_sub_category_discription').hasError('required')) {
              return 'Discription is required';
          }
          break;
        default:
          return '';
      }
    }  
}