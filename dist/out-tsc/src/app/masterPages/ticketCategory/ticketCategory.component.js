import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
let TicketCategoryComponent = class TicketCategoryComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['TicketCategoryName', 'TicketCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllTicketCategory().subscribe(res => {
            this.dataSource = new MatTableDataSource();
            this.dataSource.data = res;
            this.dataSource.sort = this.sort;
            this.Service.formModelAssetCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addTicketCategory().subscribe(res => {
            //this.toastr.success('Department Added Successfully', 'Department');
            this.LoadData();
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], TicketCategoryComponent.prototype, "sort", void 0);
TicketCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketCategory',
        templateUrl: './ticketCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], TicketCategoryComponent);
export { TicketCategoryComponent };
//# sourceMappingURL=ticketCategory.component.js.map