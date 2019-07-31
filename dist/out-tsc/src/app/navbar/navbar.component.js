import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
let NavbarComponent = class NavbarComponent {
    constructor(config) {
        this.sidebarOpened = false;
        config.placement = 'bottom-right';
    }
    toggleOffcanvas() {
        this.sidebarOpened = !this.sidebarOpened;
        if (this.sidebarOpened) {
            document.querySelector('.sidebar-offcanvas').classList.add('active');
        }
        else {
            document.querySelector('.sidebar-offcanvas').classList.remove('active');
        }
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss'],
        providers: [NgbDropdownConfig]
    }),
    tslib_1.__metadata("design:paramtypes", [NgbDropdownConfig])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map