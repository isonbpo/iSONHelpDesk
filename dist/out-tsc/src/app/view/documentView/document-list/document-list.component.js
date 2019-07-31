import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DocumentListComponent = class DocumentListComponent {
    constructor() {
        this.displayedColumns = ['CaseNumber', 'Subject', 'CaseType', 'Category', 'SubCategory', 'OwnerName', 'AssignName', 'CaseSource', 'Status', 'CreatedBy'];
    }
    ngOnInit() {
    }
};
DocumentListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-document-list',
        templateUrl: './document-list.component.html',
        styleUrls: ['./document-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DocumentListComponent);
export { DocumentListComponent };
//# sourceMappingURL=document-list.component.js.map