webpackJsonp([8],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndPoliciesPageModule", function() { return TermsAndPoliciesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_and_policies__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermsAndPoliciesPageModule = /** @class */ (function () {
    function TermsAndPoliciesPageModule() {
    }
    TermsAndPoliciesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_and_policies__["a" /* TermsAndPoliciesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_and_policies__["a" /* TermsAndPoliciesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], TermsAndPoliciesPageModule);
    return TermsAndPoliciesPageModule;
}());

//# sourceMappingURL=terms-and-policies.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__["a" /* TabBarComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__["a" /* TabBarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routing_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_space_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_system_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabBarComponent = /** @class */ (function () {
    function TabBarComponent(navParams, navCtrl, sys, events, spaceService, route) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.sys = sys;
        this.events = events;
        this.spaceService = spaceService;
        this.route = route;
        this.tabs = [
            { title: 'cards', icon: 'albums' },
            { title: 'schedules', icon: 'calendar' },
            { title: 'todos', icon: 'checkbox-outline' },
            { title: 'new', icon: 'add-circle' },
        ];
        this.space = {
            title: 'All',
            spaceid: 'all'
        };
        console.log('Hello TabBarComponent Component');
        this.route.cast.subscribe(function (route) {
            if (route !== null) {
                _this.routing = route;
            }
        });
        this.spaceService.cast.subscribe(function (space) {
            if (space !== null) {
                _this.space = space;
            }
        });
    }
    TabBarComponent.prototype.ngOnInit = function () {
        if (this.navParams.data.spaceid) {
            this.space.spaceid = this.navParams.data.spaceid;
            this.route.setCurrentRoute({ name: this.page, spaceid: this.space.spaceid });
        }
    };
    TabBarComponent.prototype.openPage = function (tab) {
        if (tab.title === 'new') {
            this.events.publish('newItem', {
                name: this.routing && this.routing.name ? this.routing.name : 'cards',
                spaceid: this.space.spaceid,
                id: tab.title
            });
        }
        else {
            this.events.publish('setRoot', {
                name: tab.title,
                spaceid: this.space.spaceid,
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabBarComponent.prototype, "page", void 0);
    TabBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-bar',template:/*ion-inline-start:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/components/tab-bar/tab-bar.html"*/'<ng-container *ngIf="sys.deviceCast | async as device">\n	<div class="tabNavbar" *ngIf="!device.core">\n		<ion-grid no-padding>\n			<ion-row>\n				<ion-col no-padding *ngFor="let tab of tabs">\n					<button ion-button icon-only (click)="openPage(tab)">\n						<ion-icon [name]="tab.icon"></ion-icon>\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ng-container>'/*ion-inline-end:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/components/tab-bar/tab-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */]])
    ], TabBarComponent);
    return TabBarComponent;
}());

//# sourceMappingURL=tab-bar.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndPoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsAndPoliciesPage = /** @class */ (function () {
    function TermsAndPoliciesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsAndPoliciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndPoliciesPage');
    };
    TermsAndPoliciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-policies',template:/*ion-inline-start:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/settings/terms-and-policies/terms-and-policies.html"*/'<!--\n  Generated template for the TermsAndPoliciesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>termsAndPolicies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/settings/terms-and-policies/terms-and-policies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsAndPoliciesPage);
    return TermsAndPoliciesPage;
}());

//# sourceMappingURL=terms-and-policies.js.map

/***/ })

});
//# sourceMappingURL=8.js.map