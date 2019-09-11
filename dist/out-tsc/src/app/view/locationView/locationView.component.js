import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTable, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LocationGlobalComponent } from 'src/app/commonViews/location-global/location-global.component';
let LocationViewComponent = class LocationViewComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    refresh() {
        this.route.navigateByUrl('/locationList', { skipLocationChange: true }).then(() => this.route.navigate(["/location"]));
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(LocationGlobalComponent, {
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
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], LocationViewComponent.prototype, "table", void 0);
LocationViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-locationView',
        templateUrl: './locationView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
], LocationViewComponent);
export { LocationViewComponent };
//# sourceMappingURL=locationView.component.js.map