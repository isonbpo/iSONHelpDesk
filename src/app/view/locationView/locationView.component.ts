import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationGeneralComponent } from 'src/app/commonViews/location-general/location-general.component';
import { LocationGlobalComponent } from 'src/app/commonViews/location-global/location-global.component';



@Component({
  selector: 'app-locationView',
  templateUrl: './locationView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class LocationViewComponent implements OnInit {
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private route:Router,public dialog: MatDialog){}
  
  ngOnInit() {
  }
  
  refresh()
  {
    this.route.navigateByUrl('/locationList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/location"])); 
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(LocationGlobalComponent, {
      width: '800px',
      
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
      // else if(result.event == 'Update'){
      //   this.updateRowData(result.data);
      // }else if(result.event == 'Delete'){
      //   this.deleteRowData(result.data);
      // }
    });
  }
  
  addRowData(row_obj){
    // var d = new Date();
    // this.dataSource.push({
    //   id:d.getTime(),
    //   name:row_obj.name
    // });
    // this.table.renderRows();
    
  }





}
