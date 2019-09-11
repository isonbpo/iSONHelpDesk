import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
let CommonDepartmentComponent = class CommonDepartmentComponent {
    constructor(MasterService) {
        this.MasterService = MasterService;
        this.displayedColumns = ['Department', 'Members'];
    }
    ngOnInit() {
        this.getMasterList();
    }
    getMasterList() {
        this.MasterService.getActiveDepartment().subscribe(data => {
            this.ActiveDepartments = data;
        });
    }
};
CommonDepartmentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-department',
        templateUrl: './common-department.component.html',
        styleUrls: ['./common-department.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService])
], CommonDepartmentComponent);
export { CommonDepartmentComponent };
//# sourceMappingURL=common-department.component.js.map