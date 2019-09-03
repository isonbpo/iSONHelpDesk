import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketGlobalComponent } from 'src/app/commonViews/ticket-global/ticket-global.component';







@Component({
  selector: 'app-ticketView',
  templateUrl: './ticketView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class TicketViewComponent implements OnInit {
  
  constructor(private route:Router, public dialog :MatDialog){}
  
  ngOnInit() {
    
  }
  
  refresh()
  {
    this.route.navigateByUrl('/ticketList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/ticket"])); 
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(TicketGlobalComponent, {
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
