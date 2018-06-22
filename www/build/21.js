webpackJsonp([21],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEmailVerificationPageModule", function() { return AccountEmailVerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_email_verification__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountEmailVerificationPageModule = /** @class */ (function () {
    function AccountEmailVerificationPageModule() {
    }
    AccountEmailVerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_email_verification__["a" /* AccountEmailVerificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_email_verification__["a" /* AccountEmailVerificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], AccountEmailVerificationPageModule);
    return AccountEmailVerificationPageModule;
}());

//# sourceMappingURL=account-email-verification.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEmailVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routing_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_system_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountEmailVerificationPage = /** @class */ (function () {
    function AccountEmailVerificationPage(sys, route, navCtrl, navParams) {
        this.sys = sys;
        this.route = route;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.route.setCurrentRoute({ name: 'account-email-verification' });
    }
    AccountEmailVerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountEmailVerificationPage');
    };
    AccountEmailVerificationPage.prototype.pop = function () {
        var _this = this;
        this.route.getPastRouteState().then(function (state) {
            console.log(state);
            _this.route.setCurrentRoute({ name: state.name, spaceid: state.spaceid });
            _this.navCtrl.setRoot(state.name, { spaceid: state.spaceid }, { animate: true, direction: 'back' });
        });
    };
    AccountEmailVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-email-verification',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/account-settings/account-email-verification/account-email-verification.html"*/'<ion-header>\n\n	<ion-navbar hideBackButton="true">\n		<ion-buttons left *ngIf="!(sys.deviceCast | async)?.core">\n			<button ion-button icon-only (click)="pop()">\n				<ion-icon name="arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n\n		<ion-buttons left *ngIf="(sys.deviceCast | async)?.core">\n			<button ion-button icon-only (click)="pop()">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>accountEmailVerification</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/account-settings/account-email-verification/account-email-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AccountEmailVerificationPage);
    return AccountEmailVerificationPage;
}());

//# sourceMappingURL=account-email-verification.js.map

/***/ })

});
//# sourceMappingURL=21.js.map