import { Component, OnInit } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';

@Component({
  selector: 'app-common-department',
  templateUrl: './common-department.component.html',
  styleUrls: ['./common-department.component.scss']
})
export class CommonDepartmentComponent implements OnInit {
  displayedColumns: string[] = ['Department','Members'];
  ActiveDepartments:{};


  constructor(public MasterService : MasterPagesService) { }

  ngOnInit() {
    this.getMasterList();
  }

  getMasterList()
  {
    this.MasterService.getActiveDepartment().subscribe(
      data => {this.ActiveDepartments = data
    }
    );
  }
}
