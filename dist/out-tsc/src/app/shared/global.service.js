import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
let GlobalService = class GlobalService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
    }
    getCreateByDate() {
        return this.http.get(this.rootURL + '/Global/CreatedByDate');
    }
    getCountry() {
        return this.http.get(this.rootURL + '/Global/CountryList');
    }
    getState(country_id) {
        return this.http.get(this.rootURL + '/Global/StateList?country_id=' + country_id);
    }
    getCities(state_code) {
        return this.http.get(this.rootURL + '/Global/CityList?state_code=' + state_code);
    }
    getTimezone() {
        return this.http.get(this.rootURL + '/Global/TimezoneList');
    }
    getGlobalDropDown(generaltype) {
        return this.http.get(this.rootURL + '/Global/GlobalDropDown?generaltype=' + generaltype);
    }
    getCurrencyList() {
        return this.http.get(this.rootURL + '/Global/CurrencyList');
    }
    getcaseStatusList() {
        return this.http.get(this.rootURL + '/Global/CaseStatusList');
    }
    getStatusReasonList(status_id) {
        console.log("I am in Service");
        return this.http.get(this.rootURL + '/Global/StatusReasonList?status_id=' + status_id);
    }
};
GlobalService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], GlobalService);
export { GlobalService };
//# sourceMappingURL=global.service.js.map