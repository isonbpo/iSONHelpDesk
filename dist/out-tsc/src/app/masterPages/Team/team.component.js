import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TeamDialogBoxComponent } from './team-dialog-box/team-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let TeamComponent = class TeamComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['TeamName', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllTeam().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelTeam.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addTeam().subscribe(res => {
            this.toastr.success('Added Successfully', 'Team');
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(TeamDialogBoxComponent, {
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
            if (value.team_id == row_obj.team_id) {
                value.team_name = row_obj.team_name;
                value.team_enabled = row_obj.team_enabled;
                this.Service.updateTeam(value.team_id, value.team_name, value.team_enabled).subscribe();
                this.toastr.info('Updated Successfully', 'Team');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'team_name':
                if (this.Service.formModelTeam.get('team_name').hasError('required')) {
                    return 'Team name is required';
                }
                break;
            case 'team_enabled':
                if (this.Service.formModelTeam.get('team_enabled').hasError('required')) {
                    return 'Status is required';
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
], TeamComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], TeamComponent.prototype, "table", void 0);
TeamComponent = tslib_1.__decorate([
    Component({
        selector: 'app-team',
        templateUrl: './team.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], TeamComponent);
export { TeamComponent };
//# sourceMappingURL=team.component.js.map