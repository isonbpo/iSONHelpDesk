import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-history',
  templateUrl: './common-history.component.html',
  styleUrls: ['./common-history.component.scss']
})
export class CommonHistoryComponent implements OnInit {
  displayedColumns: string[] = [  'Description',	'Action',	'ActionBy'	,'ActionAt'];
  constructor() { }

  ngOnInit() {
  }

}
