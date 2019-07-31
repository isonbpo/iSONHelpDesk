import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
let AssetCategoryComponent = class AssetCategoryComponent {
    constructor(Service, route, dialog) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['AssetCategoryName', 'AssetCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllAssetCategory().subscribe(res => {
            this.dataSource = new MatTableDataSource();
            this.dataSource.data = res;
            this.dataSource.sort = this.sort;
            this.Service.formModelAssetCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addAssetCategory().subscribe(res => {
            //this.toastr.success('Department Added Successfully', 'Department');
            this.LoadData();
        });
    }
    EditDesignation(element) {
        this.Service.populateFormDesig(element);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        //this.dialog.open(DesignationComponent,dialogConfig);
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], AssetCategoryComponent.prototype, "sort", void 0);
AssetCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assetCategory',
        templateUrl: './assetCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog])
], AssetCategoryComponent);
export { AssetCategoryComponent };
//# sourceMappingURL=assetCategory.component.js.map