import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let DocumentViewComponent = class DocumentViewComponent {
    constructor() {
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Document');
        // if (selectAfterAdding) {
        //   this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
};
DocumentViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-documentView',
        templateUrl: './documentView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    })
], DocumentViewComponent);
export { DocumentViewComponent };
//# sourceMappingURL=documentView.component.js.map