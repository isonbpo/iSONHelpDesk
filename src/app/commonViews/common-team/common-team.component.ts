import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-team',
  templateUrl: './common-team.component.html',
  styleUrls: ['./common-team.component.scss']
})
export class CommonTeamComponent implements OnInit {
  displayedColumns: string[] = ['Team','Members'];
  constructor() { }

  ngOnInit() {
  }

}
