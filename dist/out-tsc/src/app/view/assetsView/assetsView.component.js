import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AssetsGlobalComponent } from 'src/app/commonViews/assets-global/assets-global.component';
let AssetsViewComponent = class AssetsViewComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Assets');
        // if (selectAfterAdding) {
        //   this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    refresh() {
        this.route.navigateByUrl('/assetsList', { skipLocationChange: true }).then(() => this.route.navigate(["/assets"]));
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(AssetsGlobalComponent, {
            width: '800px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
            // else if(result.event == 'Update'){
            //   this.updateRowData(result.data);
            // }else if(result.event == 'Delete'){
            //   this.deleteRowData(result.data);
            // }
        });
    }
    addRowData(row_obj) {
        // var d = new Date();
        // this.dataSource.push({
        //   id:d.getTime(),
        //   name:row_obj.name
        // });
        // this.table.renderRows();
    }
};
AssetsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assetsView',
        templateUrl: './assetsView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
], AssetsViewComponent);
export { AssetsViewComponent };
//# sourceMappingURL=assetsView.component.js.map