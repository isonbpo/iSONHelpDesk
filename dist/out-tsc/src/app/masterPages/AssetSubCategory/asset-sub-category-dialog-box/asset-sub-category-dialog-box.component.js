import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasterPagesService } from '../../shared/master-pages.service';
let AssetSubCategoryDialogBoxComponent = class AssetSubCategoryDialogBoxComponent {
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
        this.getMasterList();
    }
    getMasterList() {
        this.Service.getAllAssetCategory().subscribe(data => {
            this.assetscategories = data;
            console.log(data);
        });
    }
};
AssetSubCategoryDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-asset-sub-category-dialog-box',
        templateUrl: './asset-sub-category-dialog-box.component.html',
        styleUrls: ['./asset-sub-category-dialog-box.component.scss']
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService,
        MatDialogRef, Array])
], AssetSubCategoryDialogBoxComponent);
export { AssetSubCategoryDialogBoxComponent };
//# sourceMappingURL=asset-sub-category-dialog-box.component.js.map