import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';







@Component({
  selector: 'app-documentView',
  templateUrl: './documentView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class DocumentViewComponent implements OnInit {
  

  ngOnInit() {
    
  }
  
  tabs = ['General'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('Add Document');

    // if (selectAfterAdding) {
    //   this.selected.setValue(this.tabs.length - 1);
    // }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
