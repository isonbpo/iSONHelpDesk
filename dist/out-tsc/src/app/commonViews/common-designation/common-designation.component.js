import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
let CommonDesignationComponent = class CommonDesignationComponent {
    constructor(MasterService) {
        this.MasterService = MasterService;
        this.displayedColumns = ['Designation', 'Level'];
    }
    ngOnInit() {
        this.getMasterList();
    }
    getMasterList() {
        this.MasterService.getActiveDesignation().subscribe(data => {
            this.ActiveDesignations = data;
        });
    }
};
CommonDesignationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-designation',
        templateUrl: './common-designation.component.html',
        styleUrls: ['./common-designation.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService])
], CommonDesignationComponent);
export { CommonDesignationComponent };
//# sourceMappingURL=common-designation.component.js.map