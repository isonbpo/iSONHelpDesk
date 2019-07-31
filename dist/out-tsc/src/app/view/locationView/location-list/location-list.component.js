import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LocationListComponent = class LocationListComponent {
    constructor() {
        this.displayedColumns = ['ShortName', 'Active', 'Address', 'City', 'State', 'Country', 'ZipCode', 'Zone', 'Phone', 'EmailID', 'Extension', 'WebAddress', 'CreatedBy', 'CreatedTime', 'CreatedDate', 'Owner'];
    }
    ngOnInit() {
    }
};
LocationListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-location-list',
        templateUrl: './location-list.component.html',
        styleUrls: ['./location-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LocationListComponent);
export { LocationListComponent };
//# sourceMappingURL=location-list.component.js.map