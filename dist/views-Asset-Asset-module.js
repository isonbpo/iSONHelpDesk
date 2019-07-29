(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-Asset-Asset-module"],{

/***/ "./src/app/views/Asset/Asset-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/Asset/Asset-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AssetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRoutingModule", function() { return AssetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Asset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Asset.component */ "./src/app/views/Asset/Asset.component.ts");




var routes = [
    {
        path: '',
        component: _Asset_component__WEBPACK_IMPORTED_MODULE_3__["AssetComponent"],
        data: {
            title: 'Asset'
        }
    }
];
var AssetRoutingModule = /** @class */ (function () {
    function AssetRoutingModule() {
    }
    AssetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AssetRoutingModule);
    return AssetRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/Asset/Asset.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/Asset/Asset.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Asset</strong>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"row align-items-center\">\n                <div class=\"col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0\">\n                  <button type=\"button\" class=\"btn btn-block btn-primary\">\n                    <i class=\"fa fa-refresh\"></i> Refresh\n                  </button>\n                </div>\n                <div class=\"col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0\">\n                  <button type=\"button\" class=\"btn btn-block btn-success\">\n                      <i class=\"fa fa-plus\"></i> Add</button>\n                </div>\n                <div class=\"col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0\">\n                  <button type=\"button\" class=\"btn btn-block btn-warning\"> \n                      <i class=\"fa fa-pencil-square-o\"></i> Edit</button>\n                </div>\n                <div class=\"col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0\">\n                  <button type=\"button\" class=\"btn btn-block btn-danger\">\n                      <i class=\"fa fa-trash-o\"></i>\n                      Delete</button>\n                </div>\n                <div class=\"col-6 col-sm-4 col-md-4 col-xl mb-3 mb-xl-0\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" id=\"search\" name=\"search\" class=\"form-control\" placeholder=\"Search\">\n                            <div class=\"input-group-append\">\n                              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n                            </div>\n                          </div>    \n                    </div>\n                </div>\n              </div>\n              <hr>\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"CreatedBy\">Created By</label>\n                <input type=\"text\" class=\"form-control\" id=\"CreatedBy\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"CreatedAt\">Created At</label>\n                <input type=\"text\" class=\"form-control\" id=\"CreatedAt\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"AssetNo\">Asset No</label>\n                <input type=\"text\" class=\"form-control\" id=\"AssetNo\" placeholder=\"Enter Asset No.\">\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"AccountVender\">Account/Vender</label>\n                <input type=\"text\" class=\"form-control\" id=\"AccountVender\" placeholder=\"Enter Account Vender\">               \n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                  <label for=\"AssetOwner\">Asset Owner</label>\n                  <input type=\"text\" class=\"form-control\" id=\"AssetOwner\" placeholder=\"Enter Asset Owner\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"form-group\">\n                <label for=\"AssetProductName\">Asset Product Name</label>\n                <select class=\"form-control\" id=\"AssetProductName\">\n                  <option selected=\"selected\" disabled>Select Asset Product Name</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                </select>\n              </div>\n            </div>\n          </div><!--/.row-->\n          <div class=\"row\">\n              <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"AssetInstallationDate\">Asset Installation Date</label>\n                    <input type=\"date\" class=\"form-control\" id=\"AssetInstallationDate\" placeholder=\"dd mmm yy\">\n                  </div>\n                </div>\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label for=\"AssetTagNo\">Asset Tag No.</label>\n                  <input type=\"text\" class=\"form-control\" id=\"AssetTagNo\" placeholder=\"Enter the Asset Tag No.\">\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"AssetStatus\">Asset Status</label>\n                    <select class=\"form-control\" id=\"AssetStatus\">\n                      <option selected=\"selected\" disabled>Select Asset Status</option>\n                      <option>Under Warranty</option>\n                      <option>AMC</option>\n                      <option>CMC</option>\n                    </select>\n                  </div>\n                </div>\n            </div><!--/.row-->\n\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                        <label for=\"AssetWarrantyStartDate\">Asset Warranty Start Date</label>\n                        <input type=\"date\" class=\"form-control\" id=\"AssetWarrantyStartDate\" placeholder=\"dd mmm yy\">\n                    </div>\n                  </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                      <label for=\"AssetWarrantyEndDate\">Asset Warranty End Date</label>\n                      <input type=\"date\" class=\"form-control\" id=\"AssetWarrantyEndDate\" placeholder=\"dd mmm yy\">\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <label for=\"AssetValue\">Asset Value</label>\n                    <select class=\"form-control\" id=\"AssetValue\">\n                        <option selected=\"selected\" disabled>Select Currency</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                    </select>\n                  </div>\n                </div>\n              </div><!--/.row-->\n\n              <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                          <label for=\"AssetAmount\">Asset Amount</label>\n                          <input type=\"text\" class=\"form-control\" id=\"AssetAmount\" placeholder=\"Enter Asset Amount\">\n                      </div>\n                    </div>\n                  <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label for=\"AssetModel\">Asset Model</label>\n                            <input type=\"text\" class=\"form-control\" id=\"AssetModel\" placeholder=\"Enter Asset Model\">\n                        </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <label for=\"AssetOEMNumber\">Asset OEM Number</label>\n                      <input type=\"text\" class=\"form-control\" id=\"AssetOEMNumber\" placeholder=\"Enter Asset OEM Number\">\n                    </div>\n                  </div>\n                </div><!--/.row-->              \n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label for=\"AssetProcessPurpose\"> Asset Process/Purpose</label>\n                            <input type=\"text\" class=\"form-control\" id=\"AssetProcessPurpose\" placeholder=\"Enter Asset Process/Purpose \">\n                        </div>\n                      </div>\n                    <div class=\"col-sm-4\">\n                          <div class=\"form-group\">\n                              <label for=\"AssetIssueSparse\">Asset Issue/Sparse</label>\n                              <input type=\"text\" class=\"form-control\" id=\"AssetIssueSparse\" placeholder=\"Enter Asset Issue/Sparse\">\n                          </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label for=\"AssetOwnLease\">Asset Own/Lease</label>\n                        <input type=\"text\" class=\"form-control\" id=\"AssetOwnLease\" placeholder=\"Enter Asset Own/Lease\">\n                      </div>\n                    </div>\n                  </div><!--/.row-->     \n\n                  <div class=\"row\">\n                      <div class=\"col-sm-4\">\n                          <div class=\"form-group\">\n                              <label for=\"AssetPurchaseDate\"> Asset Purchase Date</label>\n                              <input type=\"Date\" class=\"form-control\" id=\"AssetPurchaseDate\" placeholder=\"mm dd yyyy\">\n                          </div>\n                        </div>\n                      <div class=\"col-sm-4\">\n                            <div class=\"form-group\">\n                                <label for=\"AssetCategory\">Asset Category</label>\n                                <select class=\"form-control\" id=\"AssetCategory\">\n                                    <option selected=\"selected\" disabled>Select Asset Category</option>\n                                    <option>2</option>\n                                    <option>3</option>\n                                    <option>4</option>\n                                </select>\n                            </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label for=\"AssetSubCategory\">Asset Sub Category</label>\n                            <select class=\"form-control\" id=\"AssetSubCategory\">\n                                <option selected=\"selected\" disabled>Select Asset Sub Category</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                            </select>\n                        </div>\n                      </div>\n                    </div><!--/.row-->              \n                             \n                  <div class=\"row\">\n                      <div class=\"col-sm-4\">\n                          <div class=\"form-group\">\n                              <label for=\"AssetSoftwareType\">Asset Software Type</label>\n                              <select class=\"form-control\" id=\"AssetSoftwareType\">\n                                  <option selected=\"selected\" disabled>Select Software Type</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                              </select>\n                          </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                          <label for=\"AssetProductType\">Asset Product Type</label>\n                          <select class=\"form-control\" id=\"AssetProductType\">\n                              <option selected=\"selected\" disabled>Select Asset Product Type</option>\n                              <option>2</option>\n                              <option>3</option>\n                              <option>4</option>\n                          </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label for=\"Description\">Description</label>\n                            <textarea id=\"Description\" name=\"Description\" rows=\"5\" class=\"form-control\" placeholder=\"Description\"></textarea>\n                        </div>\n                      </div>\n                    </div><!--/.row-->   \n\n      </div>\n      <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n    </div>\n    <!--/.col-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/Asset/Asset.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/Asset/Asset.component.ts ***!
  \************************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/coreui-plugin-chartjs-custom-tooltips */ "./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js");
/* harmony import */ var _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__);




var AssetComponent = /** @class */ (function () {
    function AssetComponent() {
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.lineChart4Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.lineChart4Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2
            }
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart2Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0
            }
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A'
            }
        ];
        this.barChart3Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.barChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart3Primary = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--primary'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Danger = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--danger'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Success = [
            {
                backgroundColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--success'),
                borderColor: 'transparent',
                borderWidth: 1
            }
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart5Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart5Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_coreui_plugin_chartjs_custom_tooltips__WEBPACK_IMPORTED_MODULE_3__["CustomTooltips"]
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        points: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false
            }
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--info'),
                borderWidth: 2
            }
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_2__["getStyle"])('--warning'),
                borderWidth: 2
            }
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
    AssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./Asset.component.html */ "./src/app/views/Asset/Asset.component.html")
        })
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/views/Asset/Asset.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/Asset/Asset.module.ts ***!
  \*********************************************/
/*! exports provided: AssetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetModule", function() { return AssetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _Asset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Asset.component */ "./src/app/views/Asset/Asset.component.ts");
/* harmony import */ var _Asset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Asset-routing.module */ "./src/app/views/Asset/Asset-routing.module.ts");






var AssetModule = /** @class */ (function () {
    function AssetModule() {
    }
    AssetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _Asset_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"]
            ],
            declarations: [_Asset_component__WEBPACK_IMPORTED_MODULE_4__["AssetComponent"]]
        })
    ], AssetModule);
    return AssetModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-Asset-Asset-module.js.map