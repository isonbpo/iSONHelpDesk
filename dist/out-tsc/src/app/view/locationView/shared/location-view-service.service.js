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
            //cust_name2 : ['', Validators.required],
            cust_short_name: ['', Validators.required],
            //cust_enabled  : ['', Validators.required],
            cust_type: ['', Validators.required],
            cust_zone: ['', Validators.required],
            cust_address1: ['', Validators.required],
            //cust_address2  : ['', Validators.required],
            //cust_address3  : ['', Validators.required],
            cust_city_code: ['', Validators.required],
            cust_state_code: ['', Validators.required],
            cust_zip_code: ['', Validators.required],
            // cust_tin_no  : ['', Validators.required],
            // cust_pan_no  : ['', Validators.required],
            // cust_category  : ['', Validators.required],
            // cust_rating  : ['', Validators.required],
            // cust_extension  : ['', Validators.required],
            // cust_website_address  : ['', Validators.required],
            cust_country_code: ['', Validators.required],
            // cust_tan_no  : ['', Validators.required],
            // cust_service_tax_no  : ['', Validators.required],
            // cust_tax_scheme_id  : ['', Validators.required],
            // owner_id : ['', Validators.required],
            // owner_name : ['', Validators.required],
            created_by: ['', Validators.required],
            //created_by : ['', Validators.required],
            // created_ip  : ['', Validators.required],
            created_date: ['', Validators.required],
        });
    }
    getAllLocation() {
        return this.http.get(this.rootURL + '/location/LocationList');
    }
    addLocation() {
        var body = {
            transaction_number: this.formModelLocation.value.transaction_number,
            cust_name: this.formModelLocation.value.cust_name,
            //cust_name2 : this.formModelLocation.value.cust_name2,
            cust_short_name: this.formModelLocation.value.cust_short_name,
            //cust_enabled  : this.formModelLocation.value.cust_enabled,
            cust_type: this.formModelLocation.value.cust_type,
            cust_zone: this.formModelLocation.value.cust_zone,
            cust_address1: this.formModelLocation.value.cust_address1,
            //cust_address2  : this.formModelLocation.value.cust_address2,
            //cust_address3  : this.formModelLocation.value.cust_address3,
            cust_city_code: this.formModelLocation.value.cust_city_code,
            cust_state_code: this.formModelLocation.value.cust_state_code,
            cust_zip_code: this.formModelLocation.value.cust_zip_code,
            // cust_tin_no  : this.formModelLocation.value.cust_tin_no,
            // cust_pan_no  : this.formModelLocation.value.cust_pan_no,
            // cust_category  : this.formModelLocation.value.cust_category,
            // cust_rating  : this.formModelLocation.value.cust_rating,
            // cust_extension  : this.formModelLocation.value.cust_extension,
            // cust_website_address  : this.formModelLocation.value.cust_website_address,
            cust_country_code: this.formModelLocation.value.cust_country_code,
            // cust_tan_no  : this.formModelLocation.value.cust_tan_no,
            // cust_service_tax_no  : this.formModelLocation.value.cust_service_tax_no,
            // cust_tax_scheme_id  : this.formModelLocation.value.cust_tax_scheme_id,
            // owner_id : this.formModelLocation.value.owner_id,
            // owner_name : this.formModelLocation.value.owner_name,
            created_by: this.formModelLocation.value.created_by,
            //created_ip  : this.formModelLocation.value.created_ip,
            created_date: this.formModelLocation.value.created_date,
        };
        console.log("The data in the body");
        console.log(body);
        return this.http.post(this.rootURL + '/location/AddLocation', body);
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