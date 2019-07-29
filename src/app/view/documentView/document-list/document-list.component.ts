import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  displayedColumns: string[] = ['CaseNumber','Subject','CaseType','Category','SubCategory','OwnerName','AssignName','CaseSource','Status','CreatedBy'];
  constructor() { }

  ngOnInit() {
  }

}
