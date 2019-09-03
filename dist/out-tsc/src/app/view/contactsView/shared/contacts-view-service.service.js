import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
let ContactsViewServiceService = class ContactsViewServiceService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
        this.formModelContacts = this.fb.group({
            id: ['', Validators.required],
            transaction_number: ['', Validators.required],
            related_to: ['', Validators.required],
            related_to_name: ['', Validators.required],
            related_to_id: ['', Validators.required],
            contact_enabled: ['', Validators.required],
            contact_title: ['', Validators.required],
            contact_fname: ['', Validators.required],
            contact_mname: ['', Validators.required],
            contact_lname: ['', Validators.required],
            contact_full_name: ['', Validators.required],
            contact_address1: ['', Validators.required],
            contact_address2: ['', Validators.required],
            contact_address3: ['', Validators.required],
            contact_city_code: ['', Validators.required],
            contact_zip_code: ['', Validators.required],
            contact_state_code: ['', Validators.required],
            contact_country_code: ['', Validators.required],
            contact_birthday: ['', Validators.required],
            contact_anniversaray: ['', Validators.required],
            contact_dept_id: ['', Validators.required],
            contact_desig_id: ['', Validators.required],
            contact_team_id: ['', Validators.required],
            contact_seniority: ['', Validators.required],
            contact_profession: ['', Validators.required],
            contact_manager: ['', Validators.required],
            contact_extension: ['', Validators.required],
            owner_id: ['', Validators.required],
            owner_name: ['', Validators.required],
            contact_shareable: ['', Validators.required],
            created_ip: ['', Validators.required],
            created_by: ['', Validators.required],
            created_date: ['', Validators.required],
            modified_by: ['', Validators.required],
            modified_date: ['', Validators.required],
            modified_ip: ['', Validators.required],
            last_activity_date: ['', Validators.required],
            contact_timezone_id: ['', Validators.required],
            contact_timezone_timespan: ['', Validators.required],
            contact_type_id: ['', Validators.required],
            contact_login_id: ['', Validators.required],
            contact_password: ['', Validators.required],
            contact_current_theme: ['', Validators.required],
            contact_show_menubar: ['', Validators.required],
            contact_show_toolbar: ['', Validators.required],
            contact_show_alertbar: ['', Validators.required],
            contact_show_popup: ['', Validators.required],
            Useable: ['', Validators.required],
            contact_phone: ['', Validators.required],
            contact_emailid: ['', Validators.required],
            custom_tab_name: ['', Validators.required],
            custom_tab_url: ['', Validators.required],
            contact_role_id: ['', Validators.required],
            contact_signature: ['', Validators.required],
            contact_cti_url: ['', Validators.required],
            cti_url: ['', Validators.required],
            cust_reportingtocolumn: ['', Validators.required],
            contact_chat_status: ['', Validators.required],
            contact_zone: ['', Validators.required],
            api_key: ['', Validators.required],
            custportal_contactId: ['', Validators.required],
            crm_contact_code: ['', Validators.required],
        });
    }
    getAllContactsList() {
        return this.http.get(this.rootURL + '/contacts/ContactsList');
    }
};
ContactsViewServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], ContactsViewServiceService);
export { ContactsViewServiceService };
//# sourceMappingURL=contacts-view-service.service.js.map