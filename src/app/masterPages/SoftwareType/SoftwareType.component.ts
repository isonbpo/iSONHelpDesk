import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SoftwareType } from '../shared/software-type.model';
import { SoftwareTypeDialogBoxComponent } from './software-type-dialog-box/software-type-dialog-box.component';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-SoftwareType',
  templateUrl: './SoftwareType.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class SoftwareTypeComponent implements OnInit {
  
  displayedColumns: string[] = ['SoftwareTypeName','SoftwareDiscription','Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: SoftwareType[];
  dataavailbale: Boolean = false;
  tempdpt: SoftwareType
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog,private toastr:ToastrService){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllSoftwareType().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
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
          this.toastr.success('Added Successfully', 'Software Type');
          this.LoadData();
          
        });
  }

  openDialog(action,obj) {
    obj.action = action;
      
      const dialogRef = this.dialog.open(SoftwareTypeDialogBoxComponent, {
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
        
        
        if(value.software_type_id == row_obj.software_type_id){
          value.software_type_name = row_obj.software_type_name;
          value.software_type_enabled = row_obj.software_type_enabled;
          value.software_type_discription = row_obj.software_type_discription;
          this.Service.updateSoftwareType(value.software_type_id,value.software_type_name,value.software_type_enabled,value.software_type_discription).subscribe();        
          this.toastr.info('Updated Successfully','Software Type');
        }
        this.LoadData();
      });
    }

    getError(el) {
      switch (el) {
        case 'software_type_name':
          if (this.Service.formModelSoftwareType.get('software_type_name').hasError('required')) {
            return 'Software Type name is required';
          }
          break;
        case 'software_type_enabled':
          if (this.Service.formModelSoftwareType.get('software_type_enabled').hasError('required')) {
            return 'Status is required';
          }
          break;
        case 'software_type_discription':
            if (this.Service.formModelSoftwareType.get('software_type_discription').hasError('required')) {
              return 'Discription is required';
            }
          break;
        default:
          return '';
      }
    }
}