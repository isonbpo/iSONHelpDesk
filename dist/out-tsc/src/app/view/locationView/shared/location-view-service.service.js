import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
let LocationViewServiceService = class LocationViewServiceService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
        this.formModelLocation = this.fb.group({
            id: ['', Validators.required],
            transaction_number: ['', Validators.required],
            cust_name: ['', Validators.required],
            cust_name2: ['', Validators.required],
            cust_short_name: ['', Validators.required],
            cust_enabled: ['', Validators.required],
            cust_type: ['', Validators.required],
            cust_zone: ['', Validators.required],
            cust_address1: ['', Validators.required],
            cust_address2: ['', Validators.required],
            cust_address3: ['', Validators.required],
            cust_city_code: ['', Validators.required],
            cust_state_code: ['', Validators.required],
            cust_zip_code: ['', Validators.required],
            cust_tin_no: ['', Validators.required],
            cust_pan_no: ['', Validators.required],
            cust_category: ['', Validators.required],
            cust_rating: ['', Validators.required],
            cust_extension: ['', Validators.required],
            cust_website_address: ['', Validators.required],
            cust_country_code: ['', Validators.required],
            cust_tan_no: ['', Validators.required],
            cust_service_tax_no: ['', Validators.required],
            cust_tax_scheme_id: ['', Validators.required],
            owner_id: ['', Validators.required],
            owner_name: ['', Validators.required],
            created_by: ['', Validators.required],
            created_ip: ['', Validators.required],
            modified_by: ['', Validators.required],
            modified_date: ['', Validators.required],
            modified_ip: ['', Validators.required],
            last_activity_date: ['', Validators.required],
            cust_case_notifcation: ['', Validators.required],
            cust_notify_caller: ['', Validators.required],
            cust_notify_contact: ['', Validators.required],
            cust_case_notification_to: ['', Validators.required],
            useable: ['', Validators.required],
            custom_tab_name: ['', Validators.required],
            custom_tab_url: ['', Validators.required],
            cust_phone: ['', Validators.required],
            cust_emailid: ['', Validators.required],
            cust_domain: ['', Validators.required],
            cust_ValidityStatus: ['', Validators.required],
            cust_Expiry_date: ['', Validators.required],
            cust_saleslocation: ['', Validators.required],
            cust_saleslocation_id: ['', Validators.required],
            cust_salesPerson: ['', Validators.required],
            cust_salesPerson_id: ['', Validators.required],
            cust_serviceLocation: ['', Validators.required],
            cust_serviceLocation_id: ['', Validators.required],
            cust_ServiceBy: ['', Validators.required],
            cust_ServiceBy_id: ['', Validators.required],
        });
    }
    getAllLocation() {
        return this.http.get(this.rootURL + '/location/LocationList');
    }
};
LocationViewServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], LocationViewServiceService);
export { LocationViewServiceService };
//# sourceMappingURL=location-view-service.service.js.map