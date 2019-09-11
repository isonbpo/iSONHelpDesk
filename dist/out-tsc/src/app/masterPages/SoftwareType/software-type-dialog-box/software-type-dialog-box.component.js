import * as tslib_1 from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let SoftwareTypeDialogBoxComponent = class SoftwareTypeDialogBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
SoftwareTypeDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-software-type-dialog-box',
        templateUrl: './software-type-dialog-box.component.html',
        styleUrls: ['./software-type-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], SoftwareTypeDialogBoxComponent);
export { SoftwareTypeDialogBoxComponent };
//# sourceMappingURL=software-type-dialog-box.component.js.map