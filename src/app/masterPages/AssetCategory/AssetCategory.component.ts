import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AssetCategory } from '../shared/asset-category.model';




@Component({
  selector: 'app-assetCategory',
  templateUrl: './assetCategory.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class AssetCategoryComponent implements OnInit {
  displayedColumns: string[] = ['AssetCategoryName', 'AssetCategoryDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
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
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
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




  EditDesignation(element)
  {
    this.Service.populateFormDesig(element);
     
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "60%";
     //this.dialog.open(DesignationComponent,dialogConfig);

  }

}