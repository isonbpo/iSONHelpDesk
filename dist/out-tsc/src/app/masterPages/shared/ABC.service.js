import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
let MasterPagesService = class MasterPagesService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.rootURL = 'http://localhost:54277/api';
        this.formModelSoftwareType = this.fb.group({
            software_type_id: ['', Validators.required],
            software_type_name: ['', Validators.required],
            software_type_enabled: ['', Validators.required],
            software_type_discription: ['', Validators.required]
        });
        this.formModelSoftwareCategory = this.fb.group({
            software_category_id: ['', Validators.required],
            software_category_name: ['', Validators.required],
            software_category_enabled: ['', Validators.required],
            software_category_discription: ['', Validators.required]
        });
        this.formModelTimeZone = this.fb.group({
            timezone_id: ['', Validators.required],
            timezone_name: ['', Validators.required],
            timezone_timespan_minutes: ['', Validators.required]
        });
    }
    //Department Start
    getDepartment() {
        return this.http.get(this.rootURL + '/department/DepartmentList');
    }
    AddDepartment(dpt) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            dept_name: dpt.dept_name, dept_enabled: dpt.dept_enabled
        };
        return this.http.post(this.rootURL + '/Department', body, { headers });
    }
    EditDepartment(dpt) {
        console.log(dpt);
        const params = new HttpParams().set('dept_id', dpt.dept_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            dept_id: dpt.dept_id, dept_name: dpt.dept_name, dept_enabled: dpt.dept_enabled
        };
        return this.http.put(this.rootURL + '/department/UpdateDepartment?dept_id=' + dpt.dept_id, body, { headers });
    }
    DeleteDepartment(dpt) {
        const params = new HttpParams().set('ID', dpt.dept_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            dept_id: dpt.dept_id, dept_name: dpt.dept_name, dept_enabled: dpt.dept_enabled
        };
        return this.http.delete(this.rootURL + '/department/DeleteDepartment?dept_id=' + dpt.dept_id);
    }
    //Department End
    //Designation Start
    getDesignation() {
        return this.http.get(this.rootURL + '/Designation/DesignationList');
    }
    AddDesignation(dg) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            desig_name: dg.desig_name, desig_enabled: dg.desig_enabled
        };
        return this.http.post(this.rootURL + '/Designation', body, { headers });
    }
    EditDesignation(dg) {
        console.log(dg);
        const params = new HttpParams().set('desig_id', dg.desig_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            desig_id: dg.desig_id, desig_name: dg.desig_name, desig_enabled: dg.desig_enabled
        };
        return this.http.put(this.rootURL + '/designation/UpdateDesignation?desig_id=' + dg.desig_id, body, { headers });
    }
    DeleteDesignation(dg) {
        const params = new HttpParams().set('ID', dg.desig_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            desig_id: dg.desig_id, desig_name: dg.desig_name, desig_enabled: dg.desig_enabled
        };
        return this.http.delete(this.rootURL + '/designation/DeleteDesignation?desig_id=' + dg.desig_id);
    }
    //Designation End
    //Team Start
    getTeam() {
        return this.http.get(this.rootURL + '/Team/TeamList');
    }
    AddTeam(tm) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            team_name: tm.team_name, team_enabled: tm.team_enabled
        };
        return this.http.post(this.rootURL + '/Team', body, { headers });
    }
    EditTeam(tm) {
        const params = new HttpParams().set('team_id', tm.team_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            team_id: tm.team_id, team_name: tm.team_name, team_enabled: tm.team_enabled
        };
        return this.http.put(this.rootURL + '/Team/UpdateTeam?team_id=' + tm.team_id, body, { headers });
    }
    DeleteTeam(tm) {
        const params = new HttpParams().set('ID', tm.team_id.toString());
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            team_id: tm.team_id, team_name: tm.team_name, team_enabled: tm.team_enabled
        };
        return this.http.delete(this.rootURL + '/Team/DeleteTeam?team_id=' + tm.team_id);
    }
    //Team End
    //Role Start
    getRole() {
        return this.http.get(this.rootURL + '/Role/RoleList');
    }
    AddRole(rl) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            role_name: rl.role_name, role_description: rl.role_description, role_enabled: rl.role_enabled
        };
        return this.http.post(this.rootURL + '/Role', body, { headers });
    }
    EditRole(rl) {
        const params = new HttpParams().set('role_id', rl.role_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            role_id: rl.role_id, role_name: rl.role_name, role_description: rl.role_description, role_enabled: rl.role_enabled
        };
        return this.http.put(this.rootURL + '/Role/UpdateRole?role_id=' + rl.role_id, body, { headers });
    }
    DeleteRole(rl) {
        const params = new HttpParams().set('ID', rl.role_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            role_id: rl.role_id, role_name: rl.role_name, role_description: rl.role_description, role_enabled: rl.role_enabled
        };
        return this.http.delete(this.rootURL + '/Role/DeleteRole?role_id=' + rl.role_id);
    }
    //Role End
    //AssetCategory Start
    getAssetCategory() {
        return this.http.get(this.rootURL + '/AssetCategory/AssetCategoryList');
    }
    AddAssetCategory(ac) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_category_name: ac.asset_category_name, asset_category_enabled: ac.asset_category_enabled, asset_category_discription: ac.asset_category_discription
        };
        return this.http.post(this.rootURL + '/AssetCategory', body, { headers });
    }
    EditAssetCategory(ac) {
        const params = new HttpParams().set('asset_category_id', ac.asset_category_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_category_id: ac.asset_category_id, asset_category_name: ac.asset_category_name, asset_category_enabled: ac.asset_category_enabled, asset_category_discription: ac.asset_category_discription
        };
        return this.http.put(this.rootURL + '/AssetCategory/UpdateAssetCategory?asset_category_id=' + ac.asset_category_id, body, { headers });
    }
    DeleteAssetCategory(ac) {
        const params = new HttpParams().set('asset_category_id', ac.asset_category_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_category_id: ac.asset_category_id, asset_category_name: ac.asset_category_name, asset_category_description: ac.asset_category_discription, asset_category_enabled: ac.asset_category_enabled
        };
        return this.http.delete(this.rootURL + '/AssetCategory/DeleteAssetCategory?asset_category_id=' + ac.asset_category_id);
    }
    //Asset Category End
    //Start Asset Sub Category section
    getAssetSubCategory() {
        return this.http.get(this.rootURL + '/AssetSubCategory/AssetSubCategoryList');
    }
    AddAssetSubCategory(asc) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_sub_category_name: asc.asset_sub_category_name, asset_sub_category_enabled: asc.asset_sub_category_enabled, asset_sub_category_discription: asc.asset_sub_category_discription
        };
        return this.http.post(this.rootURL + '/AssetSubCategory', body, { headers });
    }
    EditAssetSubCategory(asc) {
        const params = new HttpParams().set('asset_category_id', asc.asset_sub_category_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_sub_category_id: asc.asset_sub_category_id, asset_sub_category_name: asc.asset_sub_category_name, asset_sub_category_enabled: asc.asset_sub_category_enabled, asset_sub_category_discription: asc.asset_sub_category_discription
        };
        return this.http.put(this.rootURL + '/AssetSubCategory/UpdateAssetSubCategory?asset_sub_category_id=' + asc.asset_sub_category_id, body, { headers });
    }
    DeleteAssetSubCategory(asc) {
        const params = new HttpParams().set('asset_category_id', asc.asset_sub_category_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            asset_sub_category_id: asc.asset_sub_category_id, asset_sub_category_name: asc.asset_sub_category_name, asset_sub_category_enabled: asc.asset_sub_category_enabled, asset_sub_category_discription: asc.asset_sub_category_discription
        };
        return this.http.delete(this.rootURL + '/AssetSubCategory/DeleteAssetSubCategory?asset_sub_category_id=' + asc.asset_sub_category_id);
    }
    // End Asset Sub Category Section
    //Start Products section
    getProducts() {
        return this.http.get(this.rootURL + '/Products/ProductsList');
    }
    AddProducts(pro) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_name: pro.product_name, product_enabled: pro.product_enabled, product_discription: pro.product_part_discription,
            product_type: pro.product_type, product_vender_name: pro.product_vender_name, product_manufacturer_name: pro.product_manufacturer_name,
            product_part_no: pro.product_part_no
        };
        return this.http.post(this.rootURL + '/Products', body, { headers });
    }
    EditProducts(pro) {
        const params = new HttpParams().set('product_id', pro.product_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_id: pro.product_id, product_name: pro.product_name, product_enabled: pro.product_enabled, product_part_discription: pro.product_part_discription,
            product_type: pro.product_type, product_vender_name: pro.product_vender_name, product_manufacturer_name: pro.product_manufacturer_name,
            product_part_no: pro.product_part_no
        };
        return this.http.put(this.rootURL + '/Products/UpdateProducts?product_id=' + pro.product_id, body, { headers });
    }
    DeleteProducts(pro) {
        const params = new HttpParams().set('product_id', pro.product_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_id: pro.product_id, product_name: pro.product_name, product_enabled: pro.product_enabled, product_part_discription: pro.product_part_discription,
            product_type: pro.product_type, product_vender_name: pro.product_vender_name, product_manufacturer_name: pro.product_manufacturer_name,
            product_part_no: pro.product_part_no
        };
        return this.http.delete(this.rootURL + '/Products/DeleteProducts?product_id=' + pro.product_id);
    }
    // End Product Section
    //Start Products Type section
    //Start ProductType section
    getProductType() {
        return this.http.get(this.rootURL + '/ProductType/ProductsTypeList');
    }
    AddProductType(proty) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_type_name: proty.product_type_name, product_type_type: proty.product_type, product_type_category: proty.product_category_name,
            product_discription: proty.product_discription, product_type_enabled: proty.product_type_enabled
        };
        return this.http.post(this.rootURL + '/ProductType', body, { headers });
    }
    EditProductType(proty) {
        const params = new HttpParams().set('product_type_id', proty.product_type_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_type_id: proty.product_type_id, product_type_name: proty.product_type_name, product_type_type: proty.product_type,
            product_type_category: proty.product_category_name, product_discription: proty.product_discription, product_type_enabled: proty.product_type_enabled
        };
        return this.http.put(this.rootURL + '/ProductType/UpdateProductsType?product_type_id=' + proty.product_type_id, body, { headers });
    }
    DeleteProductType(proty) {
        const params = new HttpParams().set('product_type_id', proty.product_type_id);
        const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
            product_type_id: proty.product_type_id, product_type_name: proty.product_type_name, product_type_type: proty.product_type,
            product_type_category: proty.product_category_name, product_discription: proty.product_discription, product_type_enabled: proty.product_type_enabled
        };
        return this.http.delete(this.rootURL + '/ProductType/DeleteProductType?product_type_id=' + proty.product_type_id);
    }
    getAllSoftwareType() {
        this.http.get(this.rootURL + '/SoftwareType/SoftwareTypeList')
            .toPromise()
            .then(res => this.listSoftwareType = res);
    }
    addSoftwareType() {
        var body = {
            software_type_name: this.formModelSoftwareType.value.software_type_name,
            software_type_enabled: this.formModelSoftwareType.value.software_type_enabled,
            software_type_discription: this.formModelSoftwareType.value.software_type_discription
        };
        return this.http.post(this.rootURL + '/SoftwareType/CreateSoftwareType', body);
    }
    deleteSoftwareType(software_type_id) {
        return this.http.delete(this.rootURL + '/SoftwareType/DeleteSoftwareType?software_type_id=' + software_type_id);
    }
    editSoftwareType(software_type_id) {
        return this.http.get(this.rootURL + '/SoftwareType/EditSoftwareType?software_type_id=' + software_type_id);
    }
    getAllSoftwareCategory() {
        this.http.get(this.rootURL + '/SoftwareCategory/SoftwareCategoryList')
            .toPromise()
            .then(res => this.listSoftwareCategory = res);
    }
    addSoftwareCategory() {
        var body = {
            software_category_name: this.formModelSoftwareCategory.value.software_category_name,
            software_category_enabled: this.formModelSoftwareCategory.value.software_category_enabled,
            software_category_discription: this.formModelSoftwareCategory.value.software_category_discription
        };
        return this.http.post(this.rootURL + '/SoftwareCategory/CreateSoftwareCategory', body);
    }
    deleteSoftwareCategory(software_category_id) {
        return this.http.delete(this.rootURL + '/SoftwareCategory/DeleteSoftwareCategory?software_category_id=' + software_category_id);
    }
    editSoftwareCategory(software_category_id) {
        return this.http.get(this.rootURL + '/SoftwareCategory/EditSoftwareCategory?software_category_id=' + software_category_id);
    }
    getAllTimeZone() {
        this.http.get(this.rootURL + '/TimeZone/TimeZoneList')
            .toPromise()
            .then(res => this.listTimeZone = res);
    }
    addTimeZone() {
        var body = {
            timezone_name: this.formModelTimeZone.value.timezone_name,
            timezone_timespan_minutes: this.formModelTimeZone.value.timezone_timespan_minutes,
        };
        return this.http.post(this.rootURL + '/TimeZone/CreateTimeZone', body);
    }
    deleteTimeZone(timezone_id) {
        return this.http.delete(this.rootURL + '/TimeZone/DeleteTimeZone?timezone_id=' + timezone_id);
    }
    editTimeZone(timezone_id) {
        return this.http.get(this.rootURL + '/TimeZone/EditTimeZone?timezone_id=' + timezone_id);
    }
};
MasterPagesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpClient])
], MasterPagesService);
export { MasterPagesService };
//# sourceMappingURL=ABC.service.js.map