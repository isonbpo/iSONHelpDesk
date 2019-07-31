import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contactsView',
  templateUrl: './contactsView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class ContactsViewComponent implements OnInit {

  constructor(private route:Router){}

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
}
