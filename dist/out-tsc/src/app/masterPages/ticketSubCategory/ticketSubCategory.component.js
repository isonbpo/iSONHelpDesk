import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
let TicketSubCategoryComponent = class TicketSubCategoryComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['TicketSubCategoryName', 'TicketSubCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
        this.getMasterList();
    }
    LoadData() {
        this.Service.getAllTicketSubCategory().subscribe(res => {
            this.dataSource = new MatTableDataSource();
            this.dataSource.data = res;
            this.dataSource.sort = this.sort;
            this.Service.formModelTicketSubCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addTicketSubCategory().subscribe(res => {
            //this.toastr.success('Department Added Successfully', 'Department');
            this.LoadData();
        });
    }
    getMasterList() {
        this.Service.getActiveTicketCategory().subscribe(data => this.Activeticketscategories = data);
    }
    EditDesignation(element) {
        this.Service.populateFormDesig(element);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        //this.dialog.open(DesignationComponent,dialogConfig);
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], TicketSubCategoryComponent.prototype, "sort", void 0);
TicketSubCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketSubCategory',
        templateUrl: './ticketSubCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], TicketSubCategoryComponent);
export { TicketSubCategoryComponent };
//# sourceMappingURL=ticketSubCategory.component.js.map