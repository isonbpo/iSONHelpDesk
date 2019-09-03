import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
let DocumentViewServicesService = class DocumentViewServicesService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
        this.formModelLocation = this.fb.group({
            id: ['', Validators.required],
            related_to: ['', Validators.required],
            related_to_name: ['', Validators.required],
            related_to_id: ['', Validators.required],
            document_type: ['', Validators.required],
            document_name: ['', Validators.required],
            document_file_name: ['', Validators.required],
            document_path: ['', Validators.required],
            document_description: ['', Validators.required],
            document_size: ['', Validators.required],
            document_extension: ['', Validators.required],
            document_mime_type: ['', Validators.required],
            document_shareable: ['', Validators.required],
            owner_id: ['', Validators.required],
            owner_name: ['', Validators.required],
            created_ip: ['', Validators.required],
            created_by: ['', Validators.required],
            created_date: ['', Validators.required],
            modified_by: ['', Validators.required],
            modified_date: ['', Validators.required],
            modified_ip: ['', Validators.required],
            last_activity_date: ['', Validators.required],
            Useable: ['', Validators.required],
            custom_tab_name: ['', Validators.required],
            custom_tab_url: ['', Validators.required],
            transaction_number: ['', Validators.required],
            document_file_Details: ['', Validators.required],
        });
    }
    getAllDocument() {
        return this.http.get(this.rootURL + '/document/DocumentList');
    }
};
DocumentViewServicesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], DocumentViewServicesService);
export { DocumentViewServicesService };
//# sourceMappingURL=document-view-services.service.js.map