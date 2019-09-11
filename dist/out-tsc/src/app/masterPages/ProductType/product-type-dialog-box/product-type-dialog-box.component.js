import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let ProductTypeDialogBoxComponent = class ProductTypeDialogBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log("In the dailog box with data");
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
ProductTypeDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-type-dialog-box',
        templateUrl: './product-type-dialog-box.component.html',
        styleUrls: ['./product-type-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], ProductTypeDialogBoxComponent);
export { ProductTypeDialogBoxComponent };
//# sourceMappingURL=product-type-dialog-box.component.js.map