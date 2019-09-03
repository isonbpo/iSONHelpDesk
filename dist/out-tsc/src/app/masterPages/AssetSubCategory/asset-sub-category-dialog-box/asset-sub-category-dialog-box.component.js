import * as tslib_1 from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let AssetSubCategoryDialogBoxComponent = class AssetSubCategoryDialogBoxComponent {
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
AssetSubCategoryDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-asset-sub-category-dialog-box',
        templateUrl: './asset-sub-category-dialog-box.component.html',
        styleUrls: ['./asset-sub-category-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], AssetSubCategoryDialogBoxComponent);
export { AssetSubCategoryDialogBoxComponent };
//# sourceMappingURL=asset-sub-category-dialog-box.component.js.map