import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { TicketViewServiceService } from '../shared/ticket-view-service.service';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
let TicketListComponent = class TicketListComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['CaseNumber', 'Subject', 'CaseType', 'Category', 'SubCategory', 'OwnerName', 'AssignName', 'CaseSource', 'Status', 'CreatedBy'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllTicket().subscribe(res => {
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.data = res;
            // this.dataSource.sort = this.sort;
            this.Service.formModelTicket.reset();
        }, err => {
            console.log(err);
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], TicketListComponent.prototype, "sort", void 0);
TicketListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticket-list',
        templateUrl: './ticket-list.component.html',
        styleUrls: ['./ticket-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [TicketViewServiceService, Router, MatDialog])
], TicketListComponent);
export { TicketListComponent };
//# sourceMappingURL=ticket-list.component.js.map