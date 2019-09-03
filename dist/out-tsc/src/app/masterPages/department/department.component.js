import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentDialogBoxComponent } from './department-dialog-box/department-dialog-box.component';
let DepartmentComponent = class DepartmentComponent {
    constructor(Service, rout, dialog) {
        this.Service = Service;
        this.rout = rout;
        this.dialog = dialog;
        this.displayedColumns = ['DepartmentName', 'Enabled', 'Action', 'Id', 'ScId'];
    }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllDepartment().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModel.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addDepartment().subscribe(res => {
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DepartmentDialogBoxComponent, {
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
        this.dataSource = this.dptlist.filter((value, key) => {
            if (value.dept_id == row_obj.dept_id) {
                value.dept_name = row_obj.dept_name;
                value.dept_enabled = row_obj.dept_enabled;
                this.Service.updateDepartment(value.dept_id, value.dept_name, value.dept_enabled).subscribe();
            }
            this.LoadData();
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], DepartmentComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], DepartmentComponent.prototype, "table", void 0);
DepartmentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-department',
        templateUrl: './department.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], DepartmentComponent);
export { DepartmentComponent };
//# sourceMappingURL=department.component.js.map