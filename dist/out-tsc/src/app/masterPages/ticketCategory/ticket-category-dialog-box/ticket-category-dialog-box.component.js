import * as tslib_1 from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MasterPagesService } from '../../shared/master-pages.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let TicketCategoryDialogBoxComponent = class TicketCategoryDialogBoxComponent {
    constructor(Service, dialogRef, data) {
        this.Service = Service;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
    ngOnInit() {
    }
};
TicketCategoryDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticket-category-dialog-box',
        templateUrl: './ticket-category-dialog-box.component.html',
        styleUrls: ['./ticket-category-dialog-box.component.scss']
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService,
        MatDialogRef, Array])
], TicketCategoryDialogBoxComponent);
export { TicketCategoryDialogBoxComponent };
//# sourceMappingURL=ticket-category-dialog-box.component.js.map