import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.isExpanded = true;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
    }
    mouseenter() {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    }
    mouseleave() {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('sidenav', { static: true }),
    tslib_1.__metadata("design:type", MatSidenav)
], SidebarComponent.prototype, "sidenav", void 0);
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map