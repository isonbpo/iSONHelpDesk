import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let DepartmentDialogBoxComponent = class DepartmentDialogBoxComponent {
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
DepartmentDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-department-dialog-box',
        templateUrl: './department-dialog-box.component.html',
        styleUrls: ['./department-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], DepartmentDialogBoxComponent);
export { DepartmentDialogBoxComponent };
//# sourceMappingURL=department-dialog-box.component.js.map