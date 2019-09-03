import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from 'src/app/shared/global.service';
let AssetsGeneralComponent = class AssetsGeneralComponent {
    constructor(Service, MPService) {
        this.Service = Service;
        this.MPService = MPService;
    }
    ngOnInit() {
        this.getMasterList();
        this.getCurrencyList();
        this.createAssetForm = new FormGroup({
            product: new FormControl(''),
            currency: new FormControl(''),
            assetscategory: new FormControl(''),
            assetssubcategory: new FormControl(''),
            softwareType: new FormControl(''),
            softwareCategory: new FormControl(''),
            productType: new FormControl('')
        });
        this.globaldropDown();
    }
    getCurrencyList() {
        this.Service.getCurrencyList().subscribe(data => this.currencies = data);
    }
    getMasterList() {
        this.MPService.getActiveProducts().subscribe(data => this.ActiveProducts = data);
        this.MPService.getActiveAssetCategory().subscribe(data => this.ActiveAssetsCategories = data);
        this.MPService.getActiveAssetSubCategory().subscribe(data => this.ActiveAssetsSubCategories = data);
        this.MPService.getActiveSoftwareType().subscribe(data => this.ActiveSoftwareTypes = data);
        this.MPService.getActiveSoftwareCategory().subscribe(data => this.ActiveSoftwareCategories = data);
        this.MPService.getActiveProductType().subscribe(data => this.ActiveProductTypes = data);
    }
    globaldropDown() {
        this.Service.getGlobalDropDown('TECHMACHINESTATUS').subscribe(data => {
            this.assetStatus = data;
        });
    }
};
AssetsGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assets-general',
        templateUrl: './assets-general.component.html',
        styleUrls: ['./assets-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GlobalService, MasterPagesService])
], AssetsGeneralComponent);
export { AssetsGeneralComponent };
//# sourceMappingURL=assets-general.component.js.map