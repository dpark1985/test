webpackJsonp([22],{

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-settings/account-email-verification/account-email-verification.module": [
		680,
		21
	],
	"../pages/account-settings/account-resets/account-resets.module": [
		681,
		20
	],
	"../pages/account-settings/account-settings.module": [
		682,
		19
	],
	"../pages/cards/card-history/card-history.module": [
		683,
		18
	],
	"../pages/cards/card-unread/card-unread.module": [
		684,
		17
	],
	"../pages/cards/card/card.module": [
		685,
		16
	],
	"../pages/cards/cards.module": [
		686,
		15
	],
	"../pages/files/files.module": [
		687,
		14
	],
	"../pages/interlinks/interlinks.module": [
		688,
		13
	],
	"../pages/schedules/schedule/schedule.module": [
		689,
		12
	],
	"../pages/schedules/schedules.module": [
		690,
		11
	],
	"../pages/settings/settings.module": [
		691,
		10
	],
	"../pages/settings/software-information/software-information.module": [
		692,
		9
	],
	"../pages/settings/terms-and-policies/terms-and-policies.module": [
		693,
		8
	],
	"../pages/space-settings/space-colors/space-colors.module": [
		694,
		7
	],
	"../pages/space-settings/space-invitations/space-invitations.module": [
		695,
		6
	],
	"../pages/space-settings/space-logs/space-logs.module": [
		696,
		5
	],
	"../pages/space-settings/space-members/space-members.module": [
		697,
		4
	],
	"../pages/space-settings/space-settings.module": [
		698,
		3
	],
	"../pages/space-settings/space-storage/space-storage.module": [
		699,
		2
	],
	"../pages/todos/todo/todo.module": [
		700,
		1
	],
	"../pages/todos/todos.module": [
		701,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__ = __webpack_require__(656);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__["a" /* TabBarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__["a" /* O2LeftSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__["a" /* O2RightSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tab_bar_tab_bar__["a" /* TabBarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__["a" /* O2LeftSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__["a" /* O2RightSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_routing_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_space_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_system_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/account-settings/account-email-verification/account-email-verification.module#AccountEmailVerificationPageModule', name: 'account-email-verification', segment: 'account-settings/email-verification', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-resets/account-resets.module#AccountResetsPageModule', name: 'account-resets', segment: 'account-settings/resets/:type', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-settings.module#AccountSettingsPageModule', name: 'account-settings', segment: 'account-settings', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/cards/card-history/card-history.module#CardHistoryPageModule', name: 'card-history', segment: 'cards/:spaceid/:cardid/history', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card-unread/card-unread.module#CardUnreadPageModule', name: 'card-unread', segment: 'cards/:spaceid/:cardid/unread', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card/card.module#CardPageModule', name: 'cards-item', segment: 'cards/:spaceid/:id', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'cards', segment: 'cards/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/files/files.module#FilesPageModule', name: 'files', segment: 'files/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/interlinks/interlinks.module#InterlinksPageModule', name: 'InterlinksPage', segment: 'interlinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/schedule/schedule.module#SchedulePageModule', name: 'schedules-item', segment: 'schedules/:spaceid/:id', priority: 'low', defaultHistory: ['schedules'] },
                        { loadChildren: '../pages/schedules/schedules.module#SchedulesPageModule', name: 'schedules', segment: 'schedules/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/software-information/software-information.module#SoftwareInformationPageModule', name: 'software-information', segment: 'software-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/terms-and-policies/terms-and-policies.module#TermsAndPoliciesPageModule', name: 'terms-policies', segment: 'terms-policies/:type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/space-settings/space-colors/space-colors.module#SpaceColorsPageModule', name: 'space-color', segment: 'space-settings/:spaceid/color', priority: 'low', defaultHistory: ['space-settings'] },
                        { loadChildren: '../pages/space-settings/space-invitations/space-invitations.module#SpaceInvitationsPageModule', name: 'space-invitation', segment: 'space-settings/:spaceid/invitation', priority: 'low', defaultHistory: ['space-settings'] },
                        { loadChildren: '../pages/space-settings/space-logs/space-logs.module#SpaceLogsPageModule', name: 'space-logs', segment: 'space-settings/:spaceid/logs', priority: 'low', defaultHistory: ['space-settings'] },
                        { loadChildren: '../pages/space-settings/space-members/space-members.module#SpaceMembersPageModule', name: 'space-members', segment: 'space-settings/:spaceid/members', priority: 'low', defaultHistory: ['space-settings'] },
                        { loadChildren: '../pages/space-settings/space-settings.module#SpaceSettingsPageModule', name: 'space-settings', segment: 'space-settings/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/space-settings/space-storage/space-storage.module#SpaceStoragePageModule', name: 'space-storage', segment: 'space-settings/:spaceid/storage', priority: 'low', defaultHistory: ['space-settings'] },
                        { loadChildren: '../pages/todos/todo/todo.module#TodoPageModule', name: 'todos-item', segment: 'todos/:spaceid/:id', priority: 'low', defaultHistory: ['todos'] },
                        { loadChildren: '../pages/todos/todos.module#TodosPageModule', name: 'todos', segment: 'todos/:spaceid', priority: 'high', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_routing_service__["a" /* RoutingService */],
                __WEBPACK_IMPORTED_MODULE_10__services_space_service__["a" /* SpaceService */],
                __WEBPACK_IMPORTED_MODULE_11__services_system_service__["a" /* SystemService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
            selector: 'tab-bar',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/tab-bar/tab-bar.html"*/'<ng-container *ngIf="sys.deviceCast | async as device">\n	<div class="tabNavbar" *ngIf="!device.core">\n		<ion-grid no-padding>\n			<ion-row>\n				<ion-col no-padding *ngFor="let tab of tabs">\n					<button ion-button icon-only (click)="openPage(tab)">\n						<ion-icon [name]="tab.icon"></ion-icon>\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ng-container>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/tab-bar/tab-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */]])
    ], TabBarComponent);
    return TabBarComponent;
}());

//# sourceMappingURL=tab-bar.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutingService = /** @class */ (function () {
    function RoutingService() {
        this.currentRoute = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.cast = this.currentRoute.asObservable();
    }
    RoutingService.prototype.setCurrentRoute = function (route) {
        this.currentRoute.next(route);
    };
    RoutingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RoutingService);
    return RoutingService;
}());

//# sourceMappingURL=routing-service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SystemService = /** @class */ (function () {
    function SystemService() {
        this.system = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]({});
        this.cast = this.system.asObservable();
        this.device = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.deviceCast = this.device.asObservable();
        console.log('Hello SystemServiceProvider Provider');
    }
    SystemService.prototype.setSystem = function (system) {
        this.system.next(system);
    };
    SystemService.prototype.setDevice = function (device) {
        this.device.next(device);
        this.deviceCast_ = device;
    };
    SystemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SystemService);
    return SystemService;
}());

//# sourceMappingURL=system-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpaceService = /** @class */ (function () {
    function SpaceService() {
        this.currentSpace = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.cast = this.currentSpace.asObservable();
    }
    SpaceService.prototype.setCurrentSpace = function (space) {
        this.currentSpace.next(space);
    };
    SpaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SpaceService);
    return SpaceService;
}());

//# sourceMappingURL=space-service.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2LeftSideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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





var O2LeftSideMenuComponent = /** @class */ (function () {
    function O2LeftSideMenuComponent(modalCtrl, sys, route, spaceService) {
        this.modalCtrl = modalCtrl;
        this.sys = sys;
        this.route = route;
        this.spaceService = spaceService;
        this.spaces = [];
        console.log('Hello O2LeftSideMenuComponent Component');
        this.spaces.push({
            title: 'Space-all',
            spaceid: 'all'
        });
        for (var i = 0; i < 10; i++) {
            this.spaces.push({
                title: "Space-" + i,
                spaceid: i.toString()
            });
        }
    }
    O2LeftSideMenuComponent.prototype.changeSpace = function (space) {
        var _this = this;
        this.route.cast.first().subscribe(function (route) {
            var name = '';
            if (route !== null && route.name) {
                name = route.name.split('-')[0];
            }
            else {
                name = 'cards';
            }
            _this.spaceService.setCurrentSpace(space);
            _this.route.setCurrentRoute({ name: name, spaceid: space.spaceid });
            _this.nav.setRoot(name, { spaceid: space.spaceid });
        });
    };
    O2LeftSideMenuComponent.prototype.openAccountSettings = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create('account-settings');
        profileModal.onDidDismiss(function () {
            _this.route.cast.first().subscribe(function (route) {
                console.log('------dismiss-----');
                _this.nav.setRoot('account-resets');
            });
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], O2LeftSideMenuComponent.prototype, "nav", void 0);
    O2LeftSideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-left-side-menu',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-left-side-menu/o2-left-side-menu.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-title>Menu</ion-title>\n		<ion-buttons>\n			<button ion-button clear (click)="openAccountSettings()">Accounts</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<button menuClose ion-item *ngFor="let s of spaces" (click)="changeSpace(s)">\n			{{s.title}}\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-left-side-menu/o2-left-side-menu.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */]) === "function" && _e || Object])
    ], O2LeftSideMenuComponent);
    return O2LeftSideMenuComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=o2-left-side-menu.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2RightSideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var O2RightSideMenuComponent = /** @class */ (function () {
    function O2RightSideMenuComponent() {
        console.log('Hello O2RightSideMenuComponent Component');
    }
    O2RightSideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-right-side-menu',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-right-side-menu/o2-right-side-menu.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-title>Right Menu</ion-title>\n	</ion-toolbar>\n</ion-header>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-right-side-menu/o2-right-side-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], O2RightSideMenuComponent);
    return O2RightSideMenuComponent;
}());

//# sourceMappingURL=o2-right-side-menu.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2TopSideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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





var O2TopSideNavComponent = /** @class */ (function () {
    function O2TopSideNavComponent(events, sys, route, spaceService) {
        var _this = this;
        this.events = events;
        this.sys = sys;
        this.route = route;
        this.spaceService = spaceService;
        this.tabs = [
            { title: 'cards', icon: 'albums' },
            { title: 'schedules', icon: 'calendar' },
            { title: 'todos', icon: 'checkbox-outline' },
            { title: 'new', icon: 'add-circle' },
        ];
        console.log('Hello O2TopSideNavComponent Component');
        this.route.cast.subscribe(function (route) {
            _this.routing = route;
        });
        this.initializeEvents();
    }
    O2TopSideNavComponent.prototype.initializeEvents = function () {
        var _this = this;
        this.events.subscribe('setRoot', function (options) {
            _this.route.setCurrentRoute({ name: options.name, spaceid: options.spaceid });
            _this.nav.setRoot(options.name, { spaceid: options.spaceid });
        });
        this.events.subscribe('newItem', function (options) {
            var name = options.name.split('-');
            _this.nav.push(name[0] + '-item', {
                spaceid: options.spaceid,
                id: options.id
            });
        });
    };
    O2TopSideNavComponent.prototype.openPage = function (tab) {
        var _this = this;
        this.spaceService.cast.first().subscribe(function (space) {
            if (tab.title === 'new') {
                _this.events.publish('newItem', {
                    name: _this.routing && _this.routing.name ? _this.routing.name : 'cards',
                    spaceid: space && space.spaceid ? space.spaceid : 'all',
                    id: tab.title
                });
            }
            else {
                _this.events.publish('setRoot', {
                    name: tab.title,
                    spaceid: space && space.spaceid ? space.spaceid : 'all'
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], O2TopSideNavComponent.prototype, "nav", void 0);
    O2TopSideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-top-side-nav',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-top-side-nav/o2-top-side-nav.html"*/'<ion-toolbar class="pwa-main-toolbar" color="primary">\n	<ion-grid no-padding>\n		<ion-row>\n			<ion-col no-padding class="nav-content-left">\n				로고\n			</ion-col>\n			<ion-col no-padding class="nav-content-center">\n				<ion-buttons>\n					<button ion-button clear *ngFor="let tab of tabs" (click)="openPage(tab)">{{tab.title}}</button>\n				</ion-buttons>\n			</ion-col>\n			<ion-col no-padding class="nav-content-right">\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-toolbar>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-top-side-nav/o2-top-side-nav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */]])
    ], O2TopSideNavComponent);
    return O2TopSideNavComponent;
}());

//# sourceMappingURL=o2-top-side-nav.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_routing_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_space_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_system_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(sys, events, route, spaceService, platform, statusBar, splashScreen) {
        this.sys = sys;
        this.events = events;
        this.route = route;
        this.spaceService = spaceService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // spaces: Array<{ title: string, spaceid: string }> = [];
        this.platformType = {
            android: false,
            cordova: false,
            core: false,
            ios: false,
            ipad: false,
            iphone: false,
            mobile: false,
            mobileweb: false,
            phablet: false,
            tablet: false,
            windows: false
        };
        // private routing: any;
        this.tabs = [
            { title: 'cards', icon: 'albums' },
            { title: 'schedules', icon: 'calendar' },
            { title: 'todos', icon: 'checkbox-outline' },
            { title: 'new', icon: 'add-circle' },
        ];
        this.initializeApp();
        // this.spaces.push({
        // 	title: 'Space-all',
        // 	spaceid: 'all'
        // });
        // for (let i = 0; i < 10; i++) {
        // 	this.spaces.push({
        // 		title: `Space-${i}`,
        // 		spaceid: i.toString()
        // 	});
        // }
    }
    MyApp.prototype.initializeApp = function () {
        for (var key in this.platformType) {
            this.platformType[key] = this.platform.is(key);
        }
        this.sys.setDevice(this.platformType);
        // this.route.cast.subscribe((route) => {
        // 	this.routing = route;
        // });
        this.initializeNatives();
        this.initializePages();
    };
    MyApp.prototype.initializeNatives = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initializePages = function () {
        this.rootPage = 'cards';
        this.rootParams = { spaceid: 'all' };
        // this.initializeEvents();
    };
    // initializeEvents() {
    // 	this.events.subscribe('setRoot', (options: any) => {
    // 		this.route.setCurrentRoute({ name: options.name, spaceid: options.spaceid });
    // 		this.nav.setRoot(options.name, { spaceid: options.spaceid });
    // 	});
    // 	this.events.subscribe('newItem', (options: any) => {
    // 		const name = options.name.split('-');
    // 		this.nav.push(name[0] + '-item', {
    // 			spaceid: options.spaceid,
    // 			id: options.id
    // 		});
    // 	});
    // }
    MyApp.prototype.ionChange = function (ev) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/app/app.html"*/'<ng-container *ngIf="sys.deviceCast | async as device">\n	<o2-top-side-nav [nav]="nav" *ngIf="device.core"></o2-top-side-nav>\n</ng-container>\n\n<ion-split-pane (ionChange)="ionChange($event)">\n	<ion-menu side="left" [content]="content" id="leftSideMenu" type="overlay" [ngClass]="{\'pwa-left-menu-width\': (sys.deviceCast | async)?.core}">\n		<o2-left-side-menu [nav]="nav"></o2-left-side-menu>\n	</ion-menu>\n\n	<ion-nav [root]="rootPage" [rootParams]="rootParams" #content swipeBackEnabled="false" main></ion-nav>\n\n	<ion-menu side="right" [content]="content" id="rightSideMenu" type="overlay" class="rightSideMenu" *ngIf="(sys.deviceCast | async)?.core">\n		<o2-right-side-menu></o2-right-side-menu>\n	</ion-menu>\n</ion-split-pane>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map