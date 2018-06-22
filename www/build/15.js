webpackJsonp([15],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageModule", function() { return CardsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardsPageModule = /** @class */ (function () {
    function CardsPageModule() {
    }
    CardsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cards__["a" /* CardsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], CardsPageModule);
    return CardsPageModule;
}());

//# sourceMappingURL=cards.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_space_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_system_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_routing_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardsPage = /** @class */ (function () {
    function CardsPage(route, sys, platform, spaceService, navCtrl, navParams, menuCtrl) {
        this.route = route;
        this.sys = sys;
        this.platform = platform;
        this.spaceService = spaceService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.temp = [
            { itemid: '1', title: '1' },
            { itemid: '2', title: '2' },
            { itemid: '3', title: '3' },
            { itemid: '4', title: '4' },
            { itemid: '5', title: '5' },
            { itemid: '6', title: '6' },
            { itemid: '7', title: '7' },
            { itemid: '8', title: '8' },
            { itemid: '9', title: '9' },
            { itemid: '10', title: '10' },
        ];
        this.space = {
            title: 'All',
            spaceid: 'all'
        };
    }
    CardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsPage');
    };
    CardsPage.prototype.ionViewWillEnter = function () {
        this.route.setCurrentRoute({ name: 'cards', spaceid: this.navParams.get('spaceid') });
    };
    CardsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle('leftSideMenu');
    };
    CardsPage.prototype.itemSelected = function (item) {
        this.navCtrl.push('cards-item', {
            spaceid: this.navParams.get('spaceid'),
            itemid: item.itemid
        });
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/cards/cards.html"*/'<ng-container *ngIf="sys.deviceCast | async as device">\n	<ion-header *ngIf="!device.core">\n\n		<ion-navbar>\n			<ion-buttons left>\n				<button ion-button icon-only (click)="toggleMenu()">\n					<ion-icon name="menu"></ion-icon>\n				</button>\n			</ion-buttons>\n			<ion-title>cards</ion-title>\n		</ion-navbar>\n\n	</ion-header>\n</ng-container>\n\n\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of temp" (click)="itemSelected(item)">\n			card-Space{{this.navParams.get(\'spaceid\')}}-{{ item.title }}\n		</button>\n	</ion-list>\n	<o2-tab-bar *ngIf="!(sys.deviceCast | async)?.core"></o2-tab-bar>\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ })

});
//# sourceMappingURL=15.js.map