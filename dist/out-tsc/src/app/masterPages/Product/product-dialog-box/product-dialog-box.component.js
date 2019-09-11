import * as tslib_1 from "tslib";
import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasterPagesService } from '../../shared/master-pages.service';
let ProductDialogBoxComponent = class ProductDialogBoxComponent {
    constructor(Service, dialogRef, data) {
        this.Service = Service;
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
    ngOnInit() {
        this.getMasterList();
    }
    getMasterList() {
        this.Service.getAllProductType().subscribe(data => this.productTypes = data);
    }
};
ProductDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-dialog-box',
        templateUrl: './product-dialog-box.component.html',
        styleUrls: ['./product-dialog-box.component.scss']
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService,
        MatDialogRef, Array])
], ProductDialogBoxComponent);
export { ProductDialogBoxComponent };
//# sourceMappingURL=product-dialog-box.component.js.map