import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TicketListComponent = class TicketListComponent {
    constructor() {
        this.displayedColumns = ['CaseNumber', 'Subject', 'CaseType', 'Category', 'SubCategory', 'OwnerName', 'AssignName', 'CaseSource', 'Status', 'CreatedBy'];
    }
    ngOnInit() {
    }
};
TicketListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticket-list',
        templateUrl: './ticket-list.component.html',
        styleUrls: ['./ticket-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TicketListComponent);
export { TicketListComponent };
//# sourceMappingURL=ticket-list.component.js.map