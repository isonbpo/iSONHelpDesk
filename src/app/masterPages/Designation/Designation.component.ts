import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Designation } from '../shared/designation.model';




@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class DesignationComponent implements OnInit {
  displayedColumns: string[] = ['DesignationName', 'Enabled', 'Action','Id'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: Designation[];
  dataavailbale: Boolean = false;
  tempdpt: Designation
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllDesignation().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelDesig.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addDesignation().subscribe(
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
     this.dialog.open(DesignationComponent,dialogConfig);

  }

}