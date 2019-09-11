import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
let CommonTeamComponent = class CommonTeamComponent {
    constructor(MasterService) {
        this.MasterService = MasterService;
        this.displayedColumns = ['Team', 'Members'];
    }
    ngOnInit() {
        this.getMasterList();
    }
    getMasterList() {
        this.MasterService.getActiveTeam().subscribe(data => this.ActiveTeams = data);
    }
};
CommonTeamComponent = tslib_1.__decorate([
    Component({
        selector: 'app-common-team',
        templateUrl: './common-team.component.html',
        styleUrls: ['./common-team.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MasterPagesService])
], CommonTeamComponent);
export { CommonTeamComponent };
//# sourceMappingURL=common-team.component.js.map