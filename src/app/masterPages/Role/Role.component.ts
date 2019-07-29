import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Role } from '../shared/role.model';




@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class RoleComponent implements OnInit {
  displayedColumns: string[] = ['RoleName', 'RoleDescription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dptlist: Role[];
  dataavailbale: Boolean = false;
  tempdpt: Role
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllRole().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelRole.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addRole().subscribe(
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