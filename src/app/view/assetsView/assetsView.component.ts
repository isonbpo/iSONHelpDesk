import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsGlobalComponent } from 'src/app/commonViews/assets-global/assets-global.component';







@Component({
  selector: 'app-assetsView',
  templateUrl: './assetsView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class AssetsViewComponent implements OnInit {
  
  constructor(private route:Router,public dialog: MatDialog){}
  
  ngOnInit() {
    
  }
  
  tabs = ['General'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('Add Assets');

    // if (selectAfterAdding) {
    //   this.selected.setValue(this.tabs.length - 1);
    // }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  refresh()
  {
    this.route.navigateByUrl('/assetsList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/assets"])); 
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AssetsGlobalComponent, {
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
