import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AssetCategoryDialogBoxComponent } from './asset-category-dialog-box/asset-category-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let AssetCategoryComponent = class AssetCategoryComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['AssetCategoryName', 'AssetCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        //this.dataSource.sort = this.sort;
        this.LoadData();
    }
    LoadData() {
        this.Service.getAllAssetCategory().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelAssetCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addAssetCategory().subscribe(res => {
            this.toastr.success('Added Successfully', 'Asset Category');
            this.LoadData();
        });
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(AssetCategoryDialogBoxComponent, {
            width: '550px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Update') {
                this.updateRowData(result.data);
            }
        });
    }
    updateRowData(row_obj) {
        this.dataSource = this.dptlist.filter((value, key) => {
            if (value.asset_category_id == row_obj.asset_category_id) {
                value.asset_category_name = row_obj.asset_category_name;
                value.asset_category_enabled = row_obj.asset_category_enabled;
                value.asset_category_discription = row_obj.asset_category_discription;
                this.Service.updateAssetCategory(value.asset_category_id, value.asset_category_name, value.asset_category_enabled, value.asset_category_discription).subscribe();
                this.toastr.info('Updated Successfully', 'Asset Category');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'asset_category_name':
                if (this.Service.formModelAssetCategory.get('asset_category_name').hasError('required')) {
                    return 'Asset Category name is required';
                }
                break;
            case 'asset_category_enabled':
                if (this.Service.formModelAssetCategory.get('asset_category_enabled').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'asset_category_discription':
                if (this.Service.formModelAssetCategory.get('asset_category_discription').hasError('required')) {
                    return 'Discription is required';
                }
                break;
            default:
                return '';
        }
    }
};
tslib_1.__decorate([
    ViewChild(MatSort, { static: true }),
    tslib_1.__metadata("design:type", MatSort)
], AssetCategoryComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    ViewChild(MatTable, { static: true }),
    tslib_1.__metadata("design:type", MatTable)
], AssetCategoryComponent.prototype, "table", void 0);
AssetCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assetCategory',
        templateUrl: './assetCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], AssetCategoryComponent);
export { AssetCategoryComponent };
//# sourceMappingURL=assetCategory.component.js.map