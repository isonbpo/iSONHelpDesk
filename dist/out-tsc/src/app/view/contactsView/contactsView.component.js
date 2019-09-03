import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
let ContactsViewComponent = class ContactsViewComponent {
    constructor(route) {
        this.route = route;
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Contacts');
        this.selected.setValue(this.tabs.length - 1);
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    refresh() {
        this.route.navigateByUrl('/contactsList', { skipLocationChange: true }).then(() => this.route.navigate(["/contacts"]));
    }
};
ContactsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contactsView',
        templateUrl: './contactsView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ContactsViewComponent);
export { ContactsViewComponent };
//# sourceMappingURL=contactsView.component.js.map