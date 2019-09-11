import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { LocationViewServiceService } from '../shared/location-view-service.service';
import { Router } from '@angular/router';
let LocationListComponent = class LocationListComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['ShortName', 'Active', 'Address', 'City', 'State', 'Country', 'ZipCode', 'Zone', 'Phone', 'EmailID', 'CreatedBy', 'CreatedTime', 'CreatedDate', 'Owner'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllLocation().subscribe(res => {
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.data = res;
            this.Service.formModelLocation.reset();
        }, err => {
            console.log(err);
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], LocationListComponent.prototype, "sort", void 0);
LocationListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-location-list',
        templateUrl: './location-list.component.html',
        styleUrls: ['./location-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [LocationViewServiceService, Router, MatDialog])
], LocationListComponent);
export { LocationListComponent };
//# sourceMappingURL=location-list.component.js.map