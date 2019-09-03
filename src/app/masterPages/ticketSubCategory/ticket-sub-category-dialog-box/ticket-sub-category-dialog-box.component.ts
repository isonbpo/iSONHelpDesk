import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TicketSubCategory } from '../../shared/ticket-sub-category.model';
import { MasterPagesService } from '../../shared/master-pages.service';

@Component({
  selector: 'app-ticket-sub-category-dialog-box',
  templateUrl: './ticket-sub-category-dialog-box.component.html',
  styleUrls: ['./ticket-sub-category-dialog-box.component.scss']
})
export class TicketSubCategoryDialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  Activeticketscategories:{};
  constructor(public Service : MasterPagesService,
    public dialogRef: MatDialogRef<TicketSubCategoryDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketSubCategory[]) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit() {
    this.getMasterList();
  }

  getMasterList()
  {
    this.Service.getActiveTicketCategory().subscribe(
      data => this.Activeticketscategories = data);
  }
}
