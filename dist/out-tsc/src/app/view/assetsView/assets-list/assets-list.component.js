import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { AssetsViewServiceService } from '../shared/assets-view-service.service';
import { Router } from '@angular/router';
let AssetsListComponent = class AssetsListComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['AssetStatus', 'AssetProId', 'AssetProName', 'AssetSerialNo', 'OwnerName', 'RelatedToName', 'WarrantyAmCtDate', 'WarrantyAmcEndDate', 'AssetInstallationDate', 'AssetSaleDate', 'RelatedTo'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllAssetsList().subscribe(res => {
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.data = res;
            this.Service.formModelAsset.reset();
        }, err => {
            console.log(err);
        });
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], AssetsListComponent.prototype, "sort", void 0);
AssetsListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assets-list',
        templateUrl: './assets-list.component.html',
        styleUrls: ['./assets-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AssetsViewServiceService, Router, MatDialog])
], AssetsListComponent);
export { AssetsListComponent };
//# sourceMappingURL=assets-list.component.js.map