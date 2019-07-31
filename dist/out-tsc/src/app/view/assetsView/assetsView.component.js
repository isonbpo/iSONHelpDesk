import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let AssetsViewComponent = class AssetsViewComponent {
    constructor() {
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
};
AssetsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assetsView',
        templateUrl: './assetsView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    })
], AssetsViewComponent);
export { AssetsViewComponent };
//# sourceMappingURL=assetsView.component.js.map