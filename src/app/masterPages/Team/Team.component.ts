import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Team } from '../shared/Team.model';




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['TeamName', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dptlist: Team[];
  dataavailbale: Boolean = false;
  tempdpt: Team
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTeam().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelTeam.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    
    this.Service.addTeam().subscribe(
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