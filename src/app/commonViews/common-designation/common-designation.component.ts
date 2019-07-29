import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-designation',
  templateUrl: './common-designation.component.html',
  styleUrls: ['./common-designation.component.scss']
})
export class CommonDesignationComponent implements OnInit {
  displayedColumns: string[] = ['Designation','Level'];
  constructor() { }

  ngOnInit() {
  }

}
