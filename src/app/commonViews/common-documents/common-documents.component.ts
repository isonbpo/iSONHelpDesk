import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-documents',
  templateUrl: './common-documents.component.html',
  styleUrls: ['./common-documents.component.scss']
})
export class CommonDocumentsComponent implements OnInit {
  displayedColumns: string[] = ['Name','RelatedTo','FileName','Description','Size','Extension','Owner','MimeType','Type','Shareable', 'CreatedBy'];

  constructor() { }

  ngOnInit() {
  }

}
