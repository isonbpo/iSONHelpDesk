import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CommonDocumentsComponent = class CommonDocumentsComponent {
    constructor() {
        this.displayedColumns = ['Name', 'RelatedTo', 'FileName', 'Description', 'Size', 'Extension', 'Owner', 'MimeType', 'Type', 'Shareable', 'CreatedBy'];
    }
    ngOnInit() {
    }
};
CommonDocumentsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-documents',
        templateUrl: './common-documents.component.html',
        styleUrls: ['./common-documents.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CommonDocumentsComponent);
export { CommonDocumentsComponent };
//# sourceMappingURL=common-documents.component.js.map