import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SoftwareTypeDialogBoxComponent } from './software-type-dialog-box/software-type-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let SoftwareTypeComponent = class SoftwareTypeComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['SoftwareTypeName', 'SoftwareDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllSoftwareType().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelSoftwareType.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addSoftwareType().subscribe(res => {
            this.toastr.success('Added Successfully', 'Software Type');
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(SoftwareTypeDialogBoxComponent, {
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
            if (value.software_type_id == row_obj.software_type_id) {
                value.software_type_name = row_obj.software_type_name;
                value.software_type_enabled = row_obj.software_type_enabled;
                value.software_type_discription = row_obj.software_type_discription;
                this.Service.updateSoftwareType(value.software_type_id, value.software_type_name, value.software_type_enabled, value.software_type_discription).subscribe();
                this.toastr.info('Updated Successfully', 'Software Type');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'software_type_name':
                if (this.Service.formModelSoftwareType.get('software_type_name').hasError('required')) {
                    return 'Software Type name is required';
                }
                break;
            case 'software_type_enabled':
                if (this.Service.formModelSoftwareType.get('software_type_enabled').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'software_type_discription':
                if (this.Service.formModelSoftwareType.get('software_type_discription').hasError('required')) {
                    return 'Discription is required';
                }
                break;
            default:
                return '';
        }
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], SoftwareTypeComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], SoftwareTypeComponent.prototype, "table", void 0);
SoftwareTypeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-SoftwareType',
        templateUrl: './SoftwareType.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], SoftwareTypeComponent);
export { SoftwareTypeComponent };
//# sourceMappingURL=SoftwareType.component.js.map