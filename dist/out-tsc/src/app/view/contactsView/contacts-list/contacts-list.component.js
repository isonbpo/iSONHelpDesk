import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ContactsViewServiceService } from '../shared/contacts-view-service.service';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
let ContactsListComponent = class ContactsListComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['Name', 'Account', 'Active', 'Phone', 'EmailId', 'LoginId', 'EmpCode'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllContactsList().subscribe(res => {
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.data = res;
            this.Service.formModelContacts.reset();
        }, err => {
            console.log(err);
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], ContactsListComponent.prototype, "sort", void 0);
ContactsListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contacts-list',
        templateUrl: './contacts-list.component.html',
        styleUrls: ['./contacts-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ContactsViewServiceService, Router, MatDialog])
], ContactsListComponent);
export { ContactsListComponent };
//# sourceMappingURL=contacts-list.component.js.map