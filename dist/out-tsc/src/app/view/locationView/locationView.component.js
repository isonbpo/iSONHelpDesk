import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationGeneralComponent } from 'src/app/commonViews/location-general/location-general.component';
let LocationViewComponent = class LocationViewComponent {
    constructor(route) {
        this.route = route;
        this.showVar = true;
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    toggleChild() {
        this.showVar = !this.showVar;
    }
    addTab() {
        this.tabs.push('Add Location');
        this.showVar = !this.showVar;
        console.log(this.showVar);
        this.selected.setValue(this.tabs.length - 1);
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    refresh() {
        this.route.navigateByUrl('/locationList', { skipLocationChange: true }).then(() => this.route.navigate(["/location"]));
    }
};
tslib_1.__decorate([
    ViewChild(LocationGeneralComponent, { static: true }),
    tslib_1.__metadata("design:type", Object)
], LocationViewComponent.prototype, "tabsComponent", void 0);
tslib_1.__decorate([
    ViewChild('personEdit', { static: true }),
    tslib_1.__metadata("design:type", Object)
], LocationViewComponent.prototype, "editPersonTemplate", void 0);
LocationViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-locationView',
        templateUrl: './locationView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], LocationViewComponent);
export { LocationViewComponent };
//# sourceMappingURL=locationView.component.js.map