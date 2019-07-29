import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-department',
  templateUrl: './common-department.component.html',
  styleUrls: ['./common-department.component.scss']
})
export class CommonDepartmentComponent implements OnInit {
  displayedColumns: string[] = ['Department','Members'];
  constructor() { }

  ngOnInit() {
  }

}
