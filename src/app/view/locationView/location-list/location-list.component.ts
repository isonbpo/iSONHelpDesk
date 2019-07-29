import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  displayedColumns: string[] = ['ShortName','Active','Address','City','State','Country','ZipCode','Zone','Phone','EmailID','Extension','WebAddress','CreatedBy','CreatedTime','CreatedDate','Owner'];
  constructor() { }

  ngOnInit() {
  }

}
