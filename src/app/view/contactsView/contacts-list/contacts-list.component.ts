import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsView } from '../shared/contacts-view.model';
import { ContactsViewServiceService } from '../shared/contacts-view-service.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  displayedColumns: string[] = ['Name','Account','Active','Phone','EmailId','LoginId','EmpCode'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: ContactsView[];
  dataavailbale: Boolean = false;
  tempdpt: ContactsView
  
  dataSource :any;
   

  constructor(private Service:ContactsViewServiceService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllContactsList().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.data = res;  
        this.Service.formModelContacts.reset();
      },
      err => {
        console.log(err);
      });
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

}
