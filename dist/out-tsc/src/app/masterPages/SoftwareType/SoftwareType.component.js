import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
let SoftwareTypeComponent = class SoftwareTypeComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['SoftwareTypeName', 'SoftwareDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllSoftwareType().subscribe(res => {
            this.dataSource = new MatTableDataSource();
            this.dataSource.data = res;
            this.dataSource.sort = this.sort;
            this.Service.formModelSoftwareType.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addSoftwareType().subscribe(res => {
            //this.toastr.success('Department Added Successfully', 'Department');
            this.LoadData();
        });
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
], SoftwareTypeComponent.prototype, "sort", void 0);
SoftwareTypeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-SoftwareType',
        templateUrl: './SoftwareType.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], SoftwareTypeComponent);
export { SoftwareTypeComponent };
//# sourceMappingURL=SoftwareType.component.js.map