import { Component, OnInit } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';

@Component({
  selector: 'app-common-team',
  templateUrl: './common-team.component.html',
  styleUrls: ['./common-team.component.scss']
})
export class CommonTeamComponent implements OnInit {
  displayedColumns: string[] = ['Team','Members'];
  ActiveTeams:{};


  constructor(public MasterService : MasterPagesService) { }

  ngOnInit() {
    this.getMasterList();
  }

  getMasterList()
  {
    this.MasterService.getActiveTeam().subscribe(
      data => this.ActiveTeams = data
    );
  }
}
