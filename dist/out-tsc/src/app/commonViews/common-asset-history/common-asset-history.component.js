import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CommonAssetHistoryComponent = class CommonAssetHistoryComponent {
    constructor() {
        this.displayedColumns = ['AssetStatus', 'ProductName', 'TagNumber', 'Account Name', 'InstallationDate', 'Warranty', 'StartDate', 'WarrantyEndDate', 'SaleDate', 'CreatedBy', 'CreatedDate', 'Owner', 'Account', 'Category', 'SubCategory', 'ProductType', 'AssetVenderName', 'SoftwareType', 'SoftwareCategory'];
    }
    ngOnInit() {
    }
};
CommonAssetHistoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-asset-history',
        templateUrl: './common-asset-history.component.html',
        styleUrls: ['./common-asset-history.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CommonAssetHistoryComponent);
export { CommonAssetHistoryComponent };
//# sourceMappingURL=common-asset-history.component.js.map