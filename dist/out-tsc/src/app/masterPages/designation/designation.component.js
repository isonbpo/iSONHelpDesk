import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DesignationtDialogBoxComponent } from './designationt-dialog-box/designationt-dialog-box.component';
let DesignationComponent = class DesignationComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['DesignationName', 'Enabled', 'Action', 'Id'];
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllDesignation().subscribe(res => {
            this.dsglist = res;
            this.dataSource = new MatTableDataSource(this.dsglist);
            this.dataSource.sort = this.sort;
            this.Service.formModelDesig.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addDesignation().subscribe(res => {
            //this.toastr.success('Department Added Successfully', 'Department');
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DesignationtDialogBoxComponent, {
            width: '550px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Update') {
                this.updateRowData(result.data);
            }
        });
    }
    updateRowData(row_obj) {
        this.dataSource = this.dsglist.filter((value, key) => {
            if (value.desig_id == row_obj.desig_id) {
                value.desig_name = row_obj.desig_name;
                value.desig_enabled = row_obj.desig_enabled;
                this.Service.updateDesignation(value.desig_id, value.desig_name, value.desig_enabled).subscribe();
            }
            this.LoadData();
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], DesignationComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], DesignationComponent.prototype, "table", void 0);
DesignationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-designation',
        templateUrl: './designation.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], DesignationComponent);
export { DesignationComponent };
//# sourceMappingURL=designation.component.js.map