import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
let SoftwareCategoryComponent = class SoftwareCategoryComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['SoftwareCategoryName', 'SoftwareDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllSoftwareCategory().subscribe(res => {
            this.dataSource = new MatTableDataSource();
            this.dataSource.data = res;
            this.dataSource.sort = this.sort;
            this.Service.formModelSoftwareCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addSoftwareCategory().subscribe(res => {
            this.toastr.success('Added Successfully', 'Software Category');
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
], SoftwareCategoryComponent.prototype, "sort", void 0);
SoftwareCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-SoftwareCategory',
        templateUrl: './SoftwareCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], SoftwareCategoryComponent);
export { SoftwareCategoryComponent };
//# sourceMappingURL=SoftwareCategory.component.js.map