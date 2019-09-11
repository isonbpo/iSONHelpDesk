import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MasterPagesService } from '../shared/master-pages.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AssetSubCategoryDialogBoxComponent } from './asset-sub-category-dialog-box/asset-sub-category-dialog-box.component';
import { ToastrService } from 'ngx-toastr';
let AssetSubCategoryComponent = class AssetSubCategoryComponent {
    constructor(Service, route, dialog, toastr) {
        this.Service = Service;
        this.route = route;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['AssetSubCategoryName', 'AssetSubCategoryDiscription', 'Enabled', 'Action', 'Id'];
        this.dataavailbale = false;
    }
    ngOnInit() {
        this.LoadData();
        this.getMasterList();
    }
    LoadData() {
        this.Service.getAllAssetSubCategory().subscribe(res => {
            this.dptlist = res;
            this.dataSource = new MatTableDataSource(this.dptlist);
            this.dataSource.sort = this.sort;
            this.Service.formModelAssetSubCategory.reset();
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this.Service.addAssetSubCategory().subscribe(res => {
            this.LoadData();
            this.toastr.success('Added Successfully', 'Asset Sub Category');
        });
    }
    getMasterList() {
        this.Service.getAllAssetCategory().subscribe(data => this.assetscategories = data);
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(AssetSubCategoryDialogBoxComponent, {
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
            if (value.asset_sub_category_id == row_obj.asset_sub_category_id) {
                value.asset_category_id = row_obj.asset_category_id;
                value.asset_category_name = row_obj.asset_category_name;
                value.asset_sub_category_name = row_obj.asset_sub_category_name;
                value.asset_sub_category_enabled = row_obj.asset_sub_category_enabled;
                value.asset_sub_category_discription = row_obj.asset_sub_category_discription;
                this.Service.updateAssetSubCategory(value.asset_category_id, value.asset_category_name, value.asset_sub_category_id, value.asset_sub_category_name, value.asset_sub_category_enabled, value.asset_sub_category_discription).subscribe();
                this.toastr.info('Updated Successfully', 'Asset Sub Category');
            }
            this.LoadData();
        });
    }
    getError(el) {
        switch (el) {
            case 'asset_category_name':
                if (this.Service.formModelAssetSubCategory.get('asset_category_name').hasError('required')) {
                    return 'Asset Category name is required';
                }
                break;
            case 'asset_sub_category_name':
                if (this.Service.formModelAssetSubCategory.get('asset_sub_category_name').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'asset_sub_category_enabled':
                if (this.Service.formModelAssetSubCategory.get('asset_sub_category_enabled').hasError('required')) {
                    return 'Status is required';
                }
                break;
            case 'asset_sub_category_discription':
                if (this.Service.formModelAssetSubCategory.get('asset_sub_category_discription').hasError('required')) {
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
], AssetSubCategoryComponent.prototype, "sort", void 0);
AssetSubCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assetSubCategory',
        templateUrl: './assetSubCategory.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService, Router, MatDialog, ToastrService])
], AssetSubCategoryComponent);
export { AssetSubCategoryComponent };
//# sourceMappingURL=assetSubCategory.component.js.map