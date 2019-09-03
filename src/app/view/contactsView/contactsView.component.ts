import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsGlobalComponent } from 'src/app/commonViews/contacts-global/contacts-global.component';



@Component({
  selector: 'app-contactsView',
  templateUrl: './contactsView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class ContactsViewComponent implements OnInit {

  constructor(private route:Router,public dialog: MatDialog){}

  ngOnInit() {
    
  }
  
  tabs = ['General'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('Add Contacts');
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  refresh()
  {
    this.route.navigateByUrl('/contactsList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/contacts"])); 
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ContactsGlobalComponent, {
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
