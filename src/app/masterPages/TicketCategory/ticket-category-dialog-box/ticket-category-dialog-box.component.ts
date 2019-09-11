import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MasterPagesService } from '../../shared/master-pages.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TicketCategory } from '../../shared/ticket-category.model';

@Component({
  selector: 'app-ticket-category-dialog-box',
  templateUrl: './ticket-category-dialog-box.component.html',
  styleUrls: ['./ticket-category-dialog-box.component.scss']
})
export class TicketCategoryDialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  Activeticketscategories:{};
  constructor(public Service : MasterPagesService,
    public dialogRef: MatDialogRef<TicketCategoryDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketCategory[]) {
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
  }

}
