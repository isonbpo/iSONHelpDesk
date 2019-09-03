import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
let ContactsGeneralComponent = class ContactsGeneralComponent {
    constructor(formBuilder, Service, MPService) {
        this.formBuilder = formBuilder;
        this.Service = Service;
        this.MPService = MPService;
    }
    ngOnInit() {
        this.getCountryList();
        this.getMasterList();
        this.getTimezoneList();
        this.createContactForm = this.formBuilder.group({
            country: '',
            state: '',
            city: '',
            timezone: '',
            department_name: '',
            designation: '',
            team: '',
            role: '',
            //role:new FormControl(''),
            dateJoined: ''
        });
        this.getContactTypeList('CNTTYPE');
        this.getContactTitleList('TITLE');
        this.getZoneList('CUSTZONE');
        this.formGroup = this.formBuilder.group({
            dateJoined: ''
        });
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
    getTimezoneList() {
        this.Service.getTimezone().subscribe(data => this.timezones = data);
    }
    getMasterList() {
        this.MPService.getActiveDepartment().subscribe(data => this.ActiveDepartments = data);
        this.MPService.getActiveDesignation().subscribe(data => this.ActiveDesignations = data);
        this.MPService.getActiveTeam().subscribe(data => this.ActiveTeams = data);
        this.MPService.getActiveRole().subscribe(data => this.ActiveRoles = data);
    }
    getContactTypeList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.contactType = data;
        });
    }
    getContactTitleList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.contactTitle = data;
        });
    }
    getZoneList(dynamicParameter) {
        this.Service.getGlobalDropDown(dynamicParameter).subscribe(data => {
            this.zone = data;
            console.log(data);
        });
    }
};
ContactsGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contacts-general',
        templateUrl: './contacts-general.component.html',
        styleUrls: ['./contacts-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, GlobalService, MasterPagesService])
], ContactsGeneralComponent);
export { ContactsGeneralComponent };
//# sourceMappingURL=contacts-general.component.js.map