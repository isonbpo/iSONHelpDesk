import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RoleDialogBoxComponent } from './role-dialog-box/role-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let RoleComponent = class RoleComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['RoleName', 'RoleDescription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllRole().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelRole.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addRole().subscribe(res => {
            this.toastr.success('Added Successfully', 'Role');
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(RoleDialogBoxComponent, {
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
            if (value.role_id == row_obj.role_id) {
                value.role_name = row_obj.role_name;
                value.role_description = row_obj.role_description;
                value.role_enabled = row_obj.role_enabled;
                this.Service.updateRole(value.role_id, value.role_name, value.role_enabled, value.role_description).subscribe();
                this.toastr.info('Updated Successfully', 'Role');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'role_name':
                if (this.Service.formModelRole.get('role_name').hasError('required')) {
                    return 'Role name is required';
                }
                break;
            case 'role_enabled':
                if (this.Service.formModelRole.get('role_enabled').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'role_description':
                if (this.Service.formModelRole.get('role_description').hasError('required')) {
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
], RoleComponent.prototype, "sort", void 0);
RoleComponent = tslib_1.__decorate([
    Component({
        selector: 'app-role',
        templateUrl: './role.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], RoleComponent);
export { RoleComponent };
//# sourceMappingURL=role.component.js.map