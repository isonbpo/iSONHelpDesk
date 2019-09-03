import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable} from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TicketCategory } from '../shared/ticket-category.model';




@Component({
  selector: 'app-ticketCategory',
  templateUrl: './ticketCategory.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class TicketCategoryComponent implements OnInit {
  displayedColumns: string[] = ['TicketCategoryName', 'TicketCategoryDiscription', 'Enabled', 'Action','Id'];
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  dptlist: TicketCategory[];
  dataavailbale: Boolean = false;
  tempdpt: TicketCategory
  dataSource :any;
  

  constructor(private Service:MasterPagesService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTicketCategory().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource();  
        this.dataSource.data = res;  
        this.dataSource.sort = this.sort;
        this.Service.formModelAssetCategory.reset();
      },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    this.Service.addTicketCategory().subscribe(
      res=>
        {
          this.LoadData();
        });
  }

  getError(el) {
    switch (el) {
      case 'ticket_category_name':
        if (this.Service.formModelTicketCategory.get('ticket_category_name').hasError('required')) {
          return 'Ticket Category is required';
        }
        break;
      case 'ticket_category_enabled':
        if (this.Service.formModelTicketCategory.get('ticket_category_enabled').hasError('required')) {
          return 'Status is required';
        }
        break;
      case 'ticket_category_discription':
          if (this.Service.formModelTicketCategory.get('ticket_category_discription').hasError('required')) {
            return 'Discription is required';
          }
        break;
      default:
        return '';
    }
  }  

}