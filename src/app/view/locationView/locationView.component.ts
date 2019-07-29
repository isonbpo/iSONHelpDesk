import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { LocationListComponent } from './location-list/location-list.component';
import { ConcatSource } from 'webpack-sources';







@Component({
  selector: 'app-locationView',
  templateUrl: './locationView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class LocationViewComponent implements OnInit {
  

  ngOnInit() {
    
  }
  
  tabs = ['General'];
  selected = new FormControl(0);
  //showActions: boolean = false;  

  addTab() {
    this.tabs.push('Add Location');
    
    this.selected.setValue(this.tabs.length - 1);
    
    // if (selectAfterAdding) {
    // this.selected.setValue(this.tabs.length - 1);
    // }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
