import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsGlobalComponent } from 'src/app/commonViews/contacts-global/contacts-global.component';
let ContactsViewComponent = class ContactsViewComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Contacts');
        this.selected.setValue(this.tabs.length - 1);
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    refresh() {
        this.route.navigateByUrl('/contactsList', { skipLocationChange: true }).then(() => this.route.navigate(["/contacts"]));
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(ContactsGlobalComponent, {
            width: '800px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
            // else if(result.event == 'Update'){
            //   this.updateRowData(result.data);
            // }else if(result.event == 'Delete'){
            //   this.deleteRowData(result.data);
            // }
        });
    }
    addRowData(row_obj) {
        // var d = new Date();
        // this.dataSource.push({
        //   id:d.getTime(),
        //   name:row_obj.name
        // });
        // this.table.renderRows();
    }
};
ContactsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contactsView',
        templateUrl: './contactsView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
], ContactsViewComponent);
export { ContactsViewComponent };
//# sourceMappingURL=contactsView.component.js.map