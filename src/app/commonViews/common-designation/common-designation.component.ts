import { Component, OnInit } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';

@Component({
  selector: 'app-common-designation',
  templateUrl: './common-designation.component.html',
  styleUrls: ['./common-designation.component.scss']
})
export class CommonDesignationComponent implements OnInit {
  displayedColumns: string[] = ['Designation','Level'];
  ActiveDesignations:{};


  constructor(public MasterService : MasterPagesService) { }

  ngOnInit() {
    this.getMasterList();
  }

  getMasterList()
  {
    this.MasterService.getActiveDesignation().subscribe(
      data => {this.ActiveDesignations = data
    }
    );
  }

}
