import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
let RoleDialogBoxComponent = class RoleDialogBoxComponent {
    constructor(dialogRef, data) {
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
};
RoleDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-role-dialog-box',
        templateUrl: './role-dialog-box.component.html',
        styleUrls: ['./role-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], RoleDialogBoxComponent);
export { RoleDialogBoxComponent };
//# sourceMappingURL=role-dialog-box.component.js.map