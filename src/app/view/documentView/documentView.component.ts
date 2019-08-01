import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';







@Component({
  selector: 'app-documentView',
  templateUrl: './documentView.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class DocumentViewComponent implements OnInit {
  
  constructor(private route:Router){}
  
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

  refresh()
  {
    this.route.navigateByUrl('/documentList', {skipLocationChange: true}).then(()=>
    this.route.navigate(["/document"])); 
  }
}
