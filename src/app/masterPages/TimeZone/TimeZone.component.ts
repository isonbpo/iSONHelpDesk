import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TimeZone } from '../shared/time-zone.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-Timezone',
  templateUrl: './Timezone.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TimezoneComponent implements OnInit {
  
  displayedColumns: string[] = ['TimeZoneName','TimeZoneTimeSpan','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dptlist: TimeZone[];
  dataavailbale: Boolean = false;
  tempdpt: TimeZone
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog, private toastr : ToastrService){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTimeZone().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelTimeZone.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addTimeZone().subscribe(
      res=>
        {
          this.toastr.success('Added Successfully', 'Timezone');
          this.LoadData();
        });
  }


  getError(el) {
    switch (el) {
      case 'timezone_name':
        if (this.Service.formModelTimeZone.get('timezone_name').hasError('required')) {
          return 'Please enter the Timezone';
        }
      break;
      case 'timezone_timespan_minutes':
        if (this.Service.formModelTimeZone.get('timezone_timespan_minutes').hasError('required')) {
          return 'Please enter the Timespan';
        }
      break;
      default:
        return '';
    }
  }  

}