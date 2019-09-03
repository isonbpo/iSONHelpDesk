import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
let AssetsViewServiceService = class AssetsViewServiceService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
        this.formModelAsset = this.fb.group({
            id: ['', Validators.required],
            inv_status: ['', Validators.required],
            inv_product_id: ['', Validators.required],
            inv_product_name: ['', Validators.required],
            inv_serial_no: ['', Validators.required],
            owner_id: ['', Validators.required],
            related_to_id: ['', Validators.required],
            related_to_name: ['', Validators.required],
            inv_warranty_start_date: ['', Validators.required],
            inv_warranty_end_date: ['', Validators.required],
            inv_contract_start_date: ['', Validators.required],
            inv_installation_date: ['', Validators.required],
            inv_sale_date: ['', Validators.required],
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
            owner_name: ['', Validators.required],
            related_to: ['', Validators.required],
            transaction_number: ['', Validators.required],
            udf_machine_expiry_date: ['', Validators.required],
            asset_category_id: ['', Validators.required],
            asset_category: ['', Validators.required],
            asset_sub_category_id: ['', Validators.required],
            asset_sub_category: ['', Validators.required],
            asset_product_type: ['', Validators.required],
            asset_vender_name: ['', Validators.required],
            asset_vender_id: ['', Validators.required],
            asset_software_type_id: ['', Validators.required],
            asset_software_type: ['', Validators.required],
            asset_software_category_id: ['', Validators.required],
            asset_software_category: ['', Validators.required],
            asset_asset_make: ['', Validators.required],
            asset_model: ['', Validators.required],
            asset_OEM_serial_number: ['', Validators.required],
            asset_issue_sparese: ['', Validators.required],
            asset_porpose_process: ['', Validators.required],
            asset_owned_lease: ['', Validators.required],
            asset_purchase_date: ['', Validators.required],
            asset_amount: ['', Validators.required],
            asset_currency: ['', Validators.required],
            asset_product_type_id: ['', Validators.required],
            asset_desc: ['', Validators.required],
        });
    }
    getAllAssetsList() {
        return this.http.get(this.rootURL + '/Asset/AssetList');
    }
};
AssetsViewServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], AssetsViewServiceService);
export { AssetsViewServiceService };
//# sourceMappingURL=assets-view-service.service.js.map