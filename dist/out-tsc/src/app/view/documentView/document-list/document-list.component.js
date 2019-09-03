import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DocumentViewServicesService } from '../shared/document-view-services.service';
import { Router } from '@angular/router';
let DocumentListComponent = class DocumentListComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['Name', 'RelatedTo', 'FileName', 'Description', 'Size', 'Extension', 'Owner', 'MimeType', 'Type', 'Shareable', 'CreatedBy'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllDocument().subscribe(res => {
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
], DocumentListComponent.prototype, "sort", void 0);
DocumentListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-document-list',
        templateUrl: './document-list.component.html',
        styleUrls: ['./document-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [DocumentViewServicesService, Router, MatDialog])
], DocumentListComponent);
export { DocumentListComponent };
//# sourceMappingURL=document-list.component.js.map