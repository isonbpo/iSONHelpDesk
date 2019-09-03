import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatTable} from '@angular/material';
import { Department } from '../shared/department.model';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DepartmentDialogBoxComponent } from './department-dialog-box/department-dialog-box.component';





@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class DepartmentComponent implements OnInit {
  displayedColumns: string[] = ['DepartmentName', 'Enabled', 'Action','Id', 'ScId'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  dptlist: Department[];
  tempdpt: Department
  dataSource :any;
  

  constructor(private Service:MasterPagesService, private rout:Router, public dialog: MatDialog){}
  
  ngOnInit() {
      this.LoadData();
  }

  LoadData() {
    this.Service.getAllDepartment().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);
        this.dataSource.sort = this.sort;
        this.Service.formModel.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    this.Service.addDepartment().subscribe(
      res=>
        {
          this.LoadData();
        });
  }

 openDialog(action,obj) {
  obj.action = action;
    
    const dialogRef = this.dialog.open(DepartmentDialogBoxComponent, {
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
      
      if(value.dept_id == row_obj.dept_id){
        value.dept_name = row_obj.dept_name;
        value.dept_enabled = row_obj.dept_enabled;
        this.Service.updateDepartment(value.dept_id,value.dept_name,value.dept_enabled).subscribe();        
      }
      this.LoadData();
    });
  }

  //Searching Filter in whole table  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  getError(el) {
    switch (el) {
      case 'dept_name':
        if (this.Service.formModel.get('dept_name').hasError('required')) {
          return 'Department Name Required';
        }
        break;
      case 'dept_enabled':
        if (this.Service.formModel.get('dept_enabled').hasError('required')) {
          return 'Status is required';
        }
        break;
      default:
        return '';
    }
  }
}