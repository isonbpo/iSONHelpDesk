import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { LocationViewServiceService } from '../shared/location-view-service.service';
import { Router } from '@angular/router';
let LocationListComponent = class LocationListComponent {
    // data = Object.assign();
    // dataSource1 = new MatTableDataSource<Element>(this.data);
    // selection = new SelectionModel<Element>(true, []);
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['ShortName', 'Active', 'Address', 'City', 'State', 'Country', 'ZipCode', 'Zone', 'Phone', 'EmailID', 'CreatedBy', 'CreatedTime', 'CreatedDate', 'Owner'];
        this.dataavailbale = false;
    }
    // isAllSelected() {
    //   const numSelected = this.selection.selected.length;
    //   const numRows = this.dataSource.data.length;
    //   return numSelected === numRows;
    // }
    // removeSelectedRows() {
    //   this.selection.selected.forEach(item => {
    //     let index: number = this.data.findIndex(d => d === item);
    //     console.log(this.data.findIndex(d => d === item));
    //     this.data.splice(index,1)
    //     this.dataSource = new MatTableDataSource<Element>(this.data);
    //   });
    //   this.selection = new SelectionModel<Element>(true, []);
    // }
    // /** Selects all rows if they are not all selected; otherwise clear selection. */
    // masterToggle() {
    //   this.isAllSelected() ?
    //     this.selection.clear() :
    //     this.dataSource.data.forEach(row => this.selection.select(row));
    // }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllLocation().subscribe(res => {
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.data = res;
            // this.dataSource.sort = this.sort;
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