import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { ContactsViewServiceService } from 'src/app/view/contactsView/shared/contacts-view-service.service';
let ContactsGeneralComponent = class ContactsGeneralComponent {
    constructor(formBuilder, Service, MPService, ContactService) {
        this.formBuilder = formBuilder;
        this.Service = Service;
        this.MPService = MPService;
        this.ContactService = ContactService;
    }
    ngOnInit() {
        this.getCountryList();
        this.getMasterList();
        this.getTimezoneList();
        this.getContactTypeList('CNTTYPE');
        this.getContactTitleList('TITLE');
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
    getCreateByAndDate() {
        this.Service.getCreateByDate().subscribe(data => {
            this.createDateAndBy = data;
            console.log(data);
        });
    }
    onSubmit() {
        this.ContactService.addContact().subscribe(res => {
        });
    }
    getError(el) {
        switch (el) {
            case 'contact_type_id':
                if (this.ContactService.formModelContacts.get('contact_type_id').hasError('required')) {
                    return 'Please select the Contact Type';
                }
                break;
            case 'contact_title':
                if (this.ContactService.formModelContacts.get('contact_title').hasError('required')) {
                    return 'Please select the Contact Title';
                }
                break;
            case 'contact_timezone_id':
                if (this.ContactService.formModelContacts.get('contact_timezone_id').hasError('required')) {
                    return 'Please select the Timezone';
                }
                break;
            case 'contact_full_name':
                if (this.ContactService.formModelContacts.get('contact_full_name').hasError('required')) {
                    return 'Please Enter the Full Name';
                }
                break;
            case 'contact_dept_id':
                if (this.ContactService.formModelContacts.get('contact_dept_id').hasError('required')) {
                    return 'Please select the Department';
                }
                break;
            case 'cust_address1':
                if (this.ContactService.formModelContacts.get('cust_address1').hasError('required')) {
                    return 'Enter the address';
                }
                break;
            case 'contact_birthday':
                if (this.ContactService.formModelContacts.get('contact_birthday').hasError('required')) {
                    return 'Please select the DOB';
                }
                break;
            case 'contact_desig_id':
                if (this.ContactService.formModelContacts.get('contact_desig_id').hasError('required')) {
                    return 'Please select the Designation';
                }
                break;
            case 'contact_team_id':
                if (this.ContactService.formModelContacts.get('contact_team_id').hasError('required')) {
                    return 'Please select the Team';
                }
                break;
            case 'contact_zone':
                if (this.ContactService.formModelContacts.get('contact_zone').hasError('required')) {
                    return 'Please select the Zone';
                }
                break;
            case 'owner_name':
                if (this.ContactService.formModelContacts.get('owner_name').hasError('required')) {
                    return 'Please select the Zone';
                }
                break;
            case 'contact_address1':
                if (this.ContactService.formModelContacts.get('contact_address1').hasError('required')) {
                    return 'Please enter the Address';
                }
                break;
            case 'contact_country_code':
                if (this.ContactService.formModelContacts.get('contact_country_code').hasError('required')) {
                    return 'Please select the Country';
                }
                break;
            case 'contact_state_code':
                if (this.ContactService.formModelContacts.get('contact_state_code').hasError('required')) {
                    return 'Please select the State';
                }
                break;
            case 'contact_city_code':
                if (this.ContactService.formModelContacts.get('contact_city_code').hasError('required')) {
                    return 'Please select the City';
                }
                break;
            case 'contact_zip_code':
                if (this.ContactService.formModelContacts.get('contact_zip_code').hasError('required')) {
                    return 'Please enter the Zipcode';
                }
                break;
            case 'contact_emailid':
                if (this.ContactService.formModelContacts.get('contact_emailid').hasError('required')) {
                    return 'Please enter the Email Id';
                }
                break;
            case 'contact_login_id':
                if (this.ContactService.formModelContacts.get('contact_login_id').hasError('required')) {
                    return 'Please Enter the Login Id';
                }
                break;
            case 'contact_password':
                if (this.ContactService.formModelContacts.get('contact_password').hasError('required')) {
                    return 'Please enter the Password';
                }
                break;
            case 'contact_role_id':
                if (this.ContactService.formModelContacts.get('contact_role_id').hasError('required')) {
                    return 'Please select the City';
                }
                break;
            case 'cust_reportingtocolumn':
                if (this.ContactService.formModelContacts.get('cust_reportingtocolumn').hasError('required')) {
                    return 'Please select the City';
                }
                break;
            default:
                return '';
        }
    }
};
ContactsGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contacts-general',
        templateUrl: './contacts-general.component.html',
        styleUrls: ['./contacts-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, GlobalService, MasterPagesService, ContactsViewServiceService])
], ContactsGeneralComponent);
export { ContactsGeneralComponent };
//# sourceMappingURL=contacts-general.component.js.map