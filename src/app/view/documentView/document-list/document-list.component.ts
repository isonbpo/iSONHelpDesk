import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DocumentView } from '../shared/document-view.model';
import { DocumentViewServicesService } from '../shared/document-view-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  displayedColumns: string[] = ['Name','RelatedTo','FileName','Description','Size','Extension','Owner','MimeType','Type','Shareable','CreatedBy'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: DocumentView[];
  dataavailbale: Boolean = false;
  tempdpt: DocumentView
  
  dataSource :any;
   

  constructor(private Service:DocumentViewServicesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllDocument().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.data = res;  
        // this.dataSource.sort = this.sort;
        this.Service.formModelLocation.reset();
      },
      err => {
        console.log(err);
      });
  }

}
