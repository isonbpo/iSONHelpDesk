import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
let TeamDialogBoxComponent = class TeamDialogBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
    }
    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
TeamDialogBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-team-dialog-box',
        templateUrl: './team-dialog-box.component.html',
        styleUrls: ['./team-dialog-box.component.scss']
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef, Array])
], TeamDialogBoxComponent);
export { TeamDialogBoxComponent };
//# sourceMappingURL=team-dialog-box.component.js.map