import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let LocationViewComponent = class LocationViewComponent {
    constructor() {
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    //showActions: boolean = false;  
    addTab() {
        this.tabs.push('Add Location');
        this.selected.setValue(this.tabs.length - 1);
        // if (selectAfterAdding) {
        // this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
};
LocationViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-locationView',
        templateUrl: './locationView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    })
], LocationViewComponent);
export { LocationViewComponent };
//# sourceMappingURL=locationView.component.js.map