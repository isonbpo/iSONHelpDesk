import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
let DocumentViewComponent = class DocumentViewComponent {
    constructor(route) {
        this.route = route;
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
    refresh() {
        this.route.navigateByUrl('/documentList', { skipLocationChange: true }).then(() => this.route.navigate(["/document"]));
    }
};
DocumentViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-documentView',
        templateUrl: './documentView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], DocumentViewComponent);
export { DocumentViewComponent };
//# sourceMappingURL=documentView.component.js.map