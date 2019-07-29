import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SoftwareType } from '../shared/software-type.model';




@Component({
  selector: 'app-SoftwareType',
  templateUrl: './SoftwareType.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class SoftwareTypeComponent implements OnInit {
  
  displayedColumns: string[] = ['SoftwareTypeName','SoftwareDiscription','Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dptlist: SoftwareType[];
  dataavailbale: Boolean = false;
  tempdpt: SoftwareType
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllSoftwareType().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelSoftwareType.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addSoftwareType().subscribe(
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