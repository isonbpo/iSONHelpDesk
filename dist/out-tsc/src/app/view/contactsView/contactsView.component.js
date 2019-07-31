import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let ContactsViewComponent = class ContactsViewComponent {
    constructor() {
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Contacts');
        // if (selectAfterAdding) {
        //   this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
};
ContactsViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contactsView',
        templateUrl: './contactsView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    })
], ContactsViewComponent);
export { ContactsViewComponent };
//# sourceMappingURL=contactsView.component.js.map