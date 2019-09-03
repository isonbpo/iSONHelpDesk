import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DocumentsGlobalComponent } from 'src/app/commonViews/documents-global/documents-global.component';







@Component({
  selector: 'app-documentView',
  templateUrl: './documentView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class DocumentViewComponent implements OnInit {
  
  constructor(private route:Router, public dialog : MatDialog){}
  
  ngOnInit() {
    
  }
 
  refresh()
  {
    this.route.navigateByUrl('/documentList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/document"])); 
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DocumentsGlobalComponent, {
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
