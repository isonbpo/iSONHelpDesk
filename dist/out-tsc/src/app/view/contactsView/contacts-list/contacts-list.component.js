import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactsListComponent = class ContactsListComponent {
    constructor() {
        this.displayedColumns = ['Name', 'Account', 'Active', 'Phone', 'EmailId', 'LoginId', 'EmpCode'];
    }
    ngOnInit() {
    }
};
ContactsListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contacts-list',
        templateUrl: './contacts-list.component.html',
        styleUrls: ['./contacts-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ContactsListComponent);
export { ContactsListComponent };
//# sourceMappingURL=contacts-list.component.js.map