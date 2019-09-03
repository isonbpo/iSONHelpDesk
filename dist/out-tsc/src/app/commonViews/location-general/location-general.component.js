import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { FormGroup, FormControl } from '@angular/forms';
let LocationGeneralComponent = class LocationGeneralComponent {
    constructor(Service) {
        this.Service = Service;
    }
    ngOnInit() {
        this.getCountryList();
        this.createAccountForm = new FormGroup({
            country: new FormControl(''),
            state: new FormControl(''),
            city: new FormControl(''),
            AccountType: new FormControl(''),
            zonetype: new FormControl(''),
            CreatedBy: new FormControl('')
        });
        this.getAccountTypeList('ACCTYPE');
        this.getZoneList('CUSTZONE');
        this.getCreateByAndDate();
    }
    getCountryList() {
        this.Service.getCountry().subscribe(data => this.countries = data);
    }
    onChangeCountry(country_id) {
        if (country_id) {
            this.Service.getState(country_id).subscribe(data => {
                this.states = data;
                this.cities = null;
            });
        }
        else {
            this.states = null;
            this.cities = null;
        }
    }
    onChangeState(state_code) {
        if (state_code) {
            this.Service.getCities(state_code).subscribe(data => this.cities = data);
        }
        else {
            this.cities = null;
        }
    }
    getAccountTypeList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.accountTypeList = data;
        });
    }
    getZoneList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.zoneList = data;
            console.log(data);
        });
    }
    getCreateByAndDate() {
        this.Service.getCreateByDate().subscribe(data => {
            this.createDateAndBy = data;
            console.log(data);
        });
    }
};
LocationGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-location-general',
        templateUrl: './location-general.component.html',
        styleUrls: ['./location-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GlobalService])
], LocationGeneralComponent);
export { LocationGeneralComponent };
//# sourceMappingURL=location-general.component.js.map