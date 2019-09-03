import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { LocationView } from '../shared/location-view.model';
import { LocationViewServiceService } from '../shared/location-view-service.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  displayedColumns: string[] = ['ShortName','Active','Address','City','State','Country','ZipCode','Zone','Phone','EmailID','CreatedBy','CreatedTime','CreatedDate','Owner'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  dptlist: LocationView[];
  dataavailbale: Boolean = false;
  tempdpt: LocationView
  
  dataSource :any;

  



  constructor(private Service:LocationViewServiceService, private route:Router, public dialog: MatDialog)
  {
    
  
  }

  ngOnInit() {
    this.LoadData();
    
  }
  
  LoadData() {
    this.Service.getAllLocation().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.data = res;  
        this.Service.formModelLocation.reset();
      },
      err => {
        console.log(err);
      });
  }


}