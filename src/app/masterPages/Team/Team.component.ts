import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Team } from '../shared/Team.model';
import { TeamDialogBoxComponent } from './team-dialog-box/team-dialog-box.component';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['TeamName', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: Team[];
  dataavailbale: Boolean = false;
  tempdpt: Team
  dataSource :any;
   

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog,private toastr:ToastrService){}
  

  ngOnInit() {
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTeam().subscribe(  
      res => {  
        this.dptlist = res;
        this.dataSource = new MatTableDataSource(this.dptlist);  
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
          this.toastr.success('Added Successfully','Team');
          this.LoadData();
        });
  }
  
  openDialog(action,obj) {
    obj.action = action;
      
      const dialogRef = this.dialog.open(TeamDialogBoxComponent, {
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
        
        if(value.team_id == row_obj.team_id){
          value.team_name = row_obj.team_name;
          value.team_enabled = row_obj.team_enabled;
          this.Service.updateTeam(value.team_id,value.team_name,value.team_enabled).subscribe();        
          this.toastr.info('Updated Successfully','Team');
        }
        this.LoadData();
      });
    }
    
    getError(el) {
      switch (el) {
        case 'team_name':
          if (this.Service.formModelTeam.get('team_name').hasError('required')) {
            return 'Team name is required';
          }
          break;
        case 'team_enabled':
          if (this.Service.formModelTeam.get('team_enabled').hasError('required')) {
            return 'Status is required';
          }
          break;
        default:
          return '';
      }
    }
}