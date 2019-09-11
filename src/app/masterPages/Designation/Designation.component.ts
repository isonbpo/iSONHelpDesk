import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Designation } from '../shared/designation.model';
import { DesignationtDialogBoxComponent } from './designationt-dialog-box/designationt-dialog-box.component';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class DesignationComponent implements OnInit {
  displayedColumns: string[] = ['DesignationName', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

  dsglist: Designation[];
  tempdpt: Designation
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog, private toastr:ToastrService){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllDesignation().subscribe(  
      res => {  
        this.dsglist = res;
        this.dataSource = new MatTableDataSource(this.dsglist);  
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
          this.toastr.success('Added Successfully', 'Designation');
          this.LoadData();
        });
  }




  openDialog(action,obj) {
    obj.action = action;
      const dialogRef = this.dialog.open(DesignationtDialogBoxComponent, {
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
      this.dataSource = this.dsglist.filter((value,key)=>{
        if(value.desig_id == row_obj.desig_id){
          value.desig_name = row_obj.desig_name;
          value.desig_enabled = row_obj.desig_enabled;
          this.Service.updateDesignation(value.desig_id,value.desig_name,value.desig_enabled).subscribe();        
          this.toastr.info('Updated Successfully', 'Designation');
        }
        this.LoadData();
      });
    }

    getError(el) {
      switch (el) {
        case 'desig_name':
          if (this.Service.formModelDesig.get('desig_name').hasError('required')) {
            return 'Designation name is required';
          }
          break;
        case 'desig_enabled':
          if (this.Service.formModelDesig.get('desig_enabled').hasError('required')) {
            return 'Status is required';
          }
          break;
        default:
          return '';
      }
    }

}