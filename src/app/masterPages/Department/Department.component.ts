import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Department } from '../shared/department.model';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';





@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class DepartmentComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['DepartmentName', 'Enabled', 'Action','Id', 'ScId'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: Department[];
  dataavailbale: Boolean = false;
  tempdpt: Department
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }

  
  
  LoadData() {
    this.Service.getAllDepartment().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
        //this.dataSource.data = res;  
        this.Service.formModel.reset();
      },
      err => {
        console.log(err);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onSubmit() {

    this.Service.addDepartment().subscribe(
      res=>
        {
          //this.toastr.success('Department Added Successfully', 'Department');
          this.LoadData();
          
        });
  }




  EditDepartment(row)
  {
    console.log(row);
      this.Service.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      console.log(dialogConfig);
     //this.dialog.open(DepartmentPopupComponent,dialogConfig);

  }

}