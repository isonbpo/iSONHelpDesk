import * as tslib_1 from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let DesignationtDialogBoxComponent = class DesignationtDialogBoxComponent {
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
DesignationtDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-designationt-dialog-box',
        templateUrl: './designationt-dialog-box.component.html',
        styleUrls: []
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], DesignationtDialogBoxComponent);
export { DesignationtDialogBoxComponent };
//# sourceMappingURL=designationt-dialog-box.component.js.map