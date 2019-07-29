import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  displayedColumns: string[] = ['Name','Account','Active','Phone','EmailId','LoginId','EmpCode'];
  constructor() { }

  ngOnInit() {
  }

}
