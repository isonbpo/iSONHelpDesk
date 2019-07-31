import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketViewServiceService } from '../shared/ticket-view-service.service';
import { TicketView } from '../shared/ticket-view.model';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['CaseNumber','Subject','CaseType','Category','SubCategory','OwnerName','AssignName','CaseSource','Status','CreatedBy'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: TicketView[];
  dataavailbale: Boolean = false;
  tempdpt: TicketView
  
  dataSource :any;
   

  constructor(private Service:TicketViewServiceService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllTicket().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.data = res;  
        // this.dataSource.sort = this.sort;
        this.Service.formModelTicket.reset();
      },
      err => {
        console.log(err);
      });
  }


}
