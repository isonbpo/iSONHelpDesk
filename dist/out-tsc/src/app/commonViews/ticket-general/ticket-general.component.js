import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { TicketViewServiceService } from 'src/app/view/ticketView/shared/ticket-view-service.service';
let TicketGeneralComponent = class TicketGeneralComponent {
    constructor(Service, MPService, TicketService) {
        this.Service = Service;
        this.MPService = MPService;
        this.TicketService = TicketService;
    }
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
    getCaseStatusList() {
        this.Service.getcaseStatusList().subscribe(data => {
            this.caseStatusList = data;
            console.log(data);
        });
    }
    onChangeStatus(status_id) {
        console.log(status_id);
        if (status_id) {
            this.Service.getStatusReasonList(status_id).subscribe(data => {
                this.statusReasonList = data;
            });
        }
        else {
            this.statusReasonList = null;
        }
    }
    getZoneList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.zoneList = data;
        });
    }
    getActiveTicketCategoryList() {
        this.MPService.getActiveTicketCategory().subscribe(data => this.ActiveTicketCategories = data);
    }
    getActiveTicketSubCategoryList(ticket_category_id) {
        console.log("Ticket Sub Category" + ticket_category_id);
        this.MPService.getActiveTicketSubCategory(ticket_category_id).subscribe(data => this.ActiveTicketSubCategories = data);
    }
    getCreateByAndDate() {
        this.Service.getCreateByDate().subscribe(data => {
            this.createDateAndBy = data;
            console.log(data);
        });
    }
    onSubmit() {
        this.TicketService.addTicket().subscribe(res => {
        });
    }
};
TicketGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticket-general',
        templateUrl: './ticket-general.component.html',
        styleUrls: ['./ticket-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GlobalService, MasterPagesService, TicketViewServiceService])
], TicketGeneralComponent);
export { TicketGeneralComponent };
//# sourceMappingURL=ticket-general.component.js.map