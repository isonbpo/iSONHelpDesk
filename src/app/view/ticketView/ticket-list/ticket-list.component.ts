import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['CaseNumber','Subject','CaseType','Category','SubCategory','OwnerName','AssignName','CaseSource','Status','CreatedBy'];
  constructor() { }

  ngOnInit() {
  }

}
