import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AssetCategory } from '../shared/asset-category.model';
import { AssetCategoryDialogBoxComponent } from './asset-category-dialog-box/asset-category-dialog-box.component';




@Component({
  selector: 'app-assetCategory',
  templateUrl: './assetCategory.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class AssetCategoryComponent implements OnInit {
  displayedColumns: string[] = ['AssetCategoryName', 'AssetCategoryDiscription', 'Enabled', 'Action','Id'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: AssetCategory[];
  dataavailbale: Boolean = false;
  tempdpt: AssetCategory
  dataSource :any;
  

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllAssetCategory().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.sort = this.sort;
        this.Service.formModelAssetCategory.reset();
      },
      err => {
        console.log(err);
      });
  }


  onSubmit() {
    
    this.Service.addAssetCategory().subscribe(
      res=>
        {
          //this.toastr.success('Department Added Successfully', 'Department');
          this.LoadData();
          
        });
  }
  
  openDialog(action,obj) {
    obj.action = action;
      const dialogRef = this.dialog.open(AssetCategoryDialogBoxComponent, {
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
        if(value.asset_category_id == row_obj.asset_category_id){
          value.asset_category_name = row_obj.asset_category_name;
          value.asset_category_enabled = row_obj.asset_category_enabled;
          value.asset_category_discription = row_obj.asset_category_discription;
          this.Service.updateAssetCategory(value.asset_category_id,value.asset_category_name,value.asset_category_enabled, value.asset_category_discription).subscribe();        
        }
        this.LoadData();
      });
    }

    getError(el) {
      switch (el) {
        case 'asset_category_name':
          if (this.Service.formModelAssetCategory.get('asset_category_name').hasError('required')) {
            return 'Asset Category name is required';
          }
          break;
        case 'asset_category_enabled':
          if (this.Service.formModelAssetCategory.get('asset_category_enabled').hasError('required')) {
            return 'Status is required';
          }
          break;
          case 'asset_category_discription':
            if (this.Service.formModelAssetCategory.get('asset_category_discription').hasError('required')) {
              return 'Discription is required';
          }
          break;
        default:
          return '';
      }
    }  

}