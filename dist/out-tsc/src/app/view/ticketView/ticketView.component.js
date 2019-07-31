import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
let TicketViewComponent = class TicketViewComponent {
    constructor() {
        this.tabs = ['General'];
        this.selected = new FormControl(0);
    }
    ngOnInit() {
    }
    addTab() {
        this.tabs.push('Add Ticket');
        // if (selectAfterAdding) {
        //   this.selected.setValue(this.tabs.length - 1);
        // }
    }
    removeTab(index) {
        this.tabs.splice(index, 1);
    }
};
TicketViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ticketView',
        templateUrl: './ticketView.component.html',
        styleUrls: [],
        encapsulation: ViewEncapsulation.None
    })
], TicketViewComponent);
export { TicketViewComponent };
//# sourceMappingURL=ticketView.component.js.map