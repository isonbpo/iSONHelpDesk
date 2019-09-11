import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TicketSubCategoryDialogBoxComponent } from './ticket-sub-category-dialog-box/ticket-sub-category-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let TicketSubCategoryComponent = class TicketSubCategoryComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['TicketSubCategoryName', 'TicketSubCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
        this.getMasterList();
    }
    LoadData() {
        this.Service.getAllTicketSubCategory().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelTicketSubCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addTicketSubCategory().subscribe(res => {
            this.toastr.success('Added Successfully', 'Ticket Sub Category');
            this.LoadData();
        });
    }
    getMasterList() {
        this.Service.getActiveTicketCategory().subscribe(data => this.Activeticketscategories = data);
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(TicketSubCategoryDialogBoxComponent, {
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
            if (value.ticket_sub_category_id == row_obj.ticket_sub_category_id) {
                value.ticket_category_id = row_obj.ticket_category_id;
                value.ticket_sub_category_name = row_obj.ticket_sub_category_name;
                value.ticket_sub_category_enabled = row_obj.ticket_sub_category_enabled;
                value.ticket_sub_category_discription = row_obj.ticket_sub_category_discription;
                this.Service.updateTicketSubCategory(value.ticket_category_id, value.ticket_sub_category_id, value.ticket_sub_category_name, value.ticket_sub_category_enabled, value.ticket_sub_category_discription).subscribe();
                this.toastr.info('Updated Successfully', 'Ticket Sub Category');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'ticket_category':
                if (this.Service.formModelTicketSubCategory.get('ticket_category').hasError('required')) {
                    return 'Ticket Category is required';
                }
                break;
            case 'ticket_sub_category_name':
                if (this.Service.formModelTicketSubCategory.get('ticket_sub_category_name').hasError('required')) {
                    return 'Ticket Sub Category is required';
                }
                break;
            case 'ticket_sub_category_enabled':
                if (this.Service.formModelTicketSubCategory.get('ticket_sub_category_enabled').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'ticket_sub_category_discription':
                if (this.Service.formModelTicketSubCategory.get('ticket_sub_category_discription').hasError('required')) {
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
], TicketSubCategoryComponent.prototype, "sort", void 0);
TicketSubCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketSubCategory',
        templateUrl: './ticketSubCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], TicketSubCategoryComponent);
export { TicketSubCategoryComponent };
//# sourceMappingURL=ticketSubCategory.component.js.map