import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TicketGlobalComponent } from 'src/app/commonViews/ticket-global/ticket-global.component';
let TicketViewComponent = class TicketViewComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    refresh() {
        this.route.navigateByUrl('/ticketList', { skipLocationChange: true }).then(() => this.route.navigate(["/ticket"]));
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(TicketGlobalComponent, {
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
TicketViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketView',
        templateUrl: './ticketView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
], TicketViewComponent);
export { TicketViewComponent };
//# sourceMappingURL=ticketView.component.js.map