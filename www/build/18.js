webpackJsonp([18],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHistoryPageModule", function() { return CardHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_history__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardHistoryPageModule = /** @class */ (function () {
    function CardHistoryPageModule() {
    }
    CardHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__card_history__["a" /* CardHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_history__["a" /* CardHistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], CardHistoryPageModule);
    return CardHistoryPageModule;
}());

//# sourceMappingURL=card-history.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routing_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardHistoryPage = /** @class */ (function () {
    function CardHistoryPage(route, navCtrl, navParams) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CardHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardHistoryPage');
    };
    CardHistoryPage.prototype.ionViewWillEnter = function () {
        this.route.initPageRoute('cards-history', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
    };
    CardHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card-history',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/cards/card-history/card-history.html"*/'\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>cardHistory</ion-title>\n	</ion-navbar>\n\n	<ion-navbar hideBackButton="true">\n		<ion-buttons left *ngIf="!(sys.deviceCast | async)?.core">\n			<button ion-button icon-only (click)="route.pop(\'cards\', this.navParams.get(\'spaceid\'), navCtrl)">\n				<ion-icon name="arrow-back"></ion-icon>\n			</button>\n		</ion-buttons>\n\n		<ion-buttons left *ngIf="(sys.deviceCast | async)?.core">\n			<button ion-button icon-only (click)="route.pop(\'cards-item\', this.navParams.get(\'spaceid\'), navCtrl)">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>cardHistory</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/cards/card-history/card-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CardHistoryPage);
    return CardHistoryPage;
}());

//# sourceMappingURL=card-history.js.map

/***/ })

});
//# sourceMappingURL=18.js.map