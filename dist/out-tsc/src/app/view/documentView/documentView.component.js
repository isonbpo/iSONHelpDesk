import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DocumentsGlobalComponent } from 'src/app/commonViews/documents-global/documents-global.component';
let DocumentViewComponent = class DocumentViewComponent {
    constructor(route, dialog) {
        this.route = route;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    refresh() {
        this.route.navigateByUrl('/documentList', { skipLocationChange: true }).then(() => this.route.navigate(["/document"]));
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(DocumentsGlobalComponent, {
            width: '800px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
            // else if(result.event == 'Update'){
            //   this.updateRowData(result.data);
            // }else if(result.event == 'Delete'){
            //   this.deleteRowData(result.data);
            // }
        });
    }
    addRowData(row_obj) {
        // var d = new Date();
        // this.dataSource.push({
        //   id:d.getTime(),
        //   name:row_obj.name
        // });
        // this.table.renderRows();
    }
};
DocumentViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-documentView',
        templateUrl: './documentView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router, MatDialog])
], DocumentViewComponent);
export { DocumentViewComponent };
//# sourceMappingURL=documentView.component.js.map