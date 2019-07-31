import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AssetsListComponent = class AssetsListComponent {
    constructor() {
        this.displayedColumns = ['AssetStatus', 'AssetProId', 'AssetProName', 'AssetSerialNo', 'OwnerName', 'RelatedToName', 'WarrantyAmCtDate', 'WarrantyAmcEndDate', 'AssetInstallationDate', 'AssetSaleDate', 'RelatedTo'];
    }
    ngOnInit() {
    }
};
AssetsListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assets-list',
        templateUrl: './assets-list.component.html',
        styleUrls: ['./assets-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AssetsListComponent);
export { AssetsListComponent };
//# sourceMappingURL=assets-list.component.js.map