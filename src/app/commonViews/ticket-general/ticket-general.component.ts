import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { TicketViewServiceService } from 'src/app/view/ticketView/shared/ticket-view-service.service';

@Component({
  selector: 'app-ticket-general',
  templateUrl: './ticket-general.component.html',
  styleUrls: ['./ticket-general.component.scss']
})
export class TicketGeneralComponent implements OnInit {
  createTicketForm : FormGroup;
  caseStatusList: {};
  statusReasonList: {};
  zoneList:{};
  ActiveTicketCategories:{};
  ActiveTicketSubCategories:{};
  createDateAndBy:{};

  constructor(private Service:GlobalService,private MPService:MasterPagesService, private TicketService:TicketViewServiceService) { }

  ngOnInit() {
    // this.createTicketForm = new FormGroup({
    //   caseStatus: new FormControl(''),
    //   statusReason: new FormControl(''),
    //   zone: new FormControl(''),
    //   ticket_category_name: new FormControl(''),
    //   ticket_sub_category_name : new FormControl(''),

    // });
    this.getZoneList('CUSTZONE');
    this.getCaseStatusList();
    this.getActiveTicketCategoryList();
    this.getCreateByAndDate();
  }

getCaseStatusList()
{
  this.Service.getcaseStatusList().subscribe(
    data =>{
      this.caseStatusList = data
      console.log(data);
    } 

  );
}

onChangeStatus(status_id: number) {
  console.log(status_id);
  if (status_id) {
    this.Service.getStatusReasonList(status_id).subscribe(
      data => {
        this.statusReasonList = data;
      }
    );
  } else {
    this.statusReasonList = null;
  }
}
 

getZoneList(dynamicParameter)
{
  
  this.Service.getGlobalDropDown(dynamicParameter).subscribe(
    data=>{
      this.zoneList = data}
  );
}

  getActiveTicketCategoryList()
  {
    this.MPService.getActiveTicketCategory().subscribe(
    data => this.ActiveTicketCategories = data);
    
  }

  getActiveTicketSubCategoryList(ticket_category_id:number)
  {
    console.log("Ticket Sub Category" + ticket_category_id);
    this.MPService.getActiveTicketSubCategory(ticket_category_id).subscribe(
      data => this.ActiveTicketSubCategories = data);
  }

  getCreateByAndDate()
  {
    this.Service.getCreateByDate().subscribe(
      data => {
        this.createDateAndBy = data
        console.log(data);
      }
    );
  }

  onSubmit() {
    this.TicketService.addTicket().subscribe(
      res=>
        {
        });
  }
 
}
