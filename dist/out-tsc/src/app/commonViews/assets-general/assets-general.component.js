import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MasterPagesService } from 'src/app/masterPages/shared/master-pages.service';
import { GlobalService } from 'src/app/shared/global.service';
import { AssetsViewServiceService } from 'src/app/view/assetsView/shared/assets-view-service.service';
let AssetsGeneralComponent = class AssetsGeneralComponent {
    constructor(Service, MPService, AssetService) {
        this.Service = Service;
        this.MPService = MPService;
        this.AssetService = AssetService;
    }
    ngOnInit() {
        this.getMasterList();
        this.getCurrencyList();
        //   this.createAssetForm = new FormGroup({
        //     product: new FormControl(''),
        //     currency:new FormControl(''),
        //     assetscategory:new FormControl(''),
        //     assetssubcategory:new FormControl(''),
        //     softwareType:new FormControl(''),
        //     softwareCategory:new FormControl(''),
        //     productType:new FormControl('')
        // });
        this.globaldropDown();
        this.getCreateByAndDate();
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
    getCreateByAndDate() {
        this.Service.getCreateByDate().subscribe(data => {
            this.createDateAndBy = data;
            console.log(data);
        });
    }
    onSubmit() {
        console.log("hiii");
        this.AssetService.addAsset().subscribe(res => {
        });
    }
};
AssetsGeneralComponent = tslib_1.__decorate([
    Component({
        selector: 'app-assets-general',
        templateUrl: './assets-general.component.html',
        styleUrls: ['./assets-general.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [GlobalService, MasterPagesService, AssetsViewServiceService])
], AssetsGeneralComponent);
export { AssetsGeneralComponent };
//# sourceMappingURL=assets-general.component.js.map