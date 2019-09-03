import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
let TicketViewComponent = class TicketViewComponent {
    constructor(route) {
        this.route = route;
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Ticket');
        this.selected.setValue(this.tabs.length - 1);
        // if (selectAfterAdding) {
        //   this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
    refresh() {
        this.route.navigateByUrl('/ticketList', { skipLocationChange: true }).then(() => this.route.navigate(["/ticket"]));
    }
};
TicketViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketView',
        templateUrl: './ticketView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], TicketViewComponent);
export { TicketViewComponent };
//# sourceMappingURL=ticketView.component.js.map