webpackJsonp([11],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesPageModule", function() { return SchedulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedules__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SchedulesPageModule = /** @class */ (function () {
    function SchedulesPageModule() {
    }
    SchedulesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedules__["a" /* SchedulesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedules__["a" /* SchedulesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SchedulesPageModule);
    return SchedulesPageModule;
}());

//# sourceMappingURL=schedules.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_routing_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_space_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_system_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchedulesPage = /** @class */ (function () {
    function SchedulesPage(sys, spaceService, route, navCtrl, navParams, menuCtrl) {
        this.sys = sys;
        this.spaceService = spaceService;
        this.route = route;
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
        this.route.setCurrentRoute({ name: 'schedules', spaceid: this.navParams.get('spaceid') });
    }
    SchedulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulesPage');
    };
    SchedulesPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle('leftSideMenu');
    };
    SchedulesPage.prototype.itemSelected = function (item) {
        this.navCtrl.push('schedules-item', {
            spaceid: this.navParams.get('spaceid'),
            itemid: item.itemid
        });
    };
    SchedulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedules',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/schedules/schedules.html"*/'<ng-container *ngIf="sys.deviceCast | async as device">\n	<ion-header *ngIf="!device.core">\n\n		<ion-navbar>\n			<ion-buttons left>\n				<button ion-button icon-only (click)="toggleMenu()">\n					<ion-icon name="menu"></ion-icon>\n				</button>\n			</ion-buttons>\n			<ion-title>schedules</ion-title>\n		</ion-navbar>\n\n	</ion-header>\n</ng-container>\n\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let item of temp" (click)="itemSelected(item)">\n			schedule-Space{{this.navParams.get(\'spaceid\')}}-{{ item.title }}\n		</button>\n	</ion-list>\n	<o2-tab-bar *ngIf="!(sys.deviceCast | async)?.core"></o2-tab-bar>\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/schedules/schedules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], SchedulesPage);
    return SchedulesPage;
}());

//# sourceMappingURL=schedules.js.map

/***/ })

});
//# sourceMappingURL=11.js.map