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
		682,
		21
	],
	"../pages/account-settings/account-resets/account-resets.module": [
		683,
		20
	],
	"../pages/account-settings/account-settings.module": [
		684,
		19
	],
	"../pages/cards/card-history/card-history.module": [
		685,
		18
	],
	"../pages/cards/card-unread/card-unread.module": [
		686,
		17
	],
	"../pages/cards/card/card.module": [
		687,
		16
	],
	"../pages/cards/cards.module": [
		688,
		15
	],
	"../pages/files/files.module": [
		689,
		14
	],
	"../pages/interlinks/interlinks.module": [
		690,
		13
	],
	"../pages/schedules/schedule/schedule.module": [
		691,
		12
	],
	"../pages/schedules/schedules.module": [
		692,
		11
	],
	"../pages/settings/settings.module": [
		693,
		10
	],
	"../pages/settings/software-information/software-information.module": [
		694,
		9
	],
	"../pages/settings/terms-and-policies/terms-and-policies.module": [
		695,
		8
	],
	"../pages/space-settings/space-colors/space-colors.module": [
		696,
		7
	],
	"../pages/space-settings/space-invitations/space-invitations.module": [
		697,
		6
	],
	"../pages/space-settings/space-logs/space-logs.module": [
		698,
		5
	],
	"../pages/space-settings/space-members/space-members.module": [
		699,
		4
	],
	"../pages/space-settings/space-settings.module": [
		700,
		3
	],
	"../pages/space-settings/space-storage/space-storage.module": [
		701,
		2
	],
	"../pages/todos/todo/todo.module": [
		702,
		1
	],
	"../pages/todos/todos.module": [
		703,
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__o2_tab_bar_o2_tab_bar__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__ = __webpack_require__(660);
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__o2_tab_bar_o2_tab_bar__["a" /* O2TabBarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__["a" /* O2LeftSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__["a" /* O2RightSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__o2_tab_bar_o2_tab_bar__["a" /* O2TabBarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__o2_left_side_menu_o2_left_side_menu__["a" /* O2LeftSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_4__o2_right_side_menu_o2_right_side_menu__["a" /* O2RightSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__o2_top_side_nav_o2_top_side_nav__["a" /* O2TopSideNavComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_routing_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_space_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_system_service__ = __webpack_require__(45);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/account-settings/account-email-verification/account-email-verification.module#AccountEmailVerificationPageModule', name: 'account-email-verification', segment: 'account-settings/email-verification', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-resets/account-resets.module#AccountResetsPageModule', name: 'account-resets', segment: 'account-settings/resets/:type', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-settings.module#AccountSettingsPageModule', name: 'account-settings', segment: 'account-settings', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/cards/card-history/card-history.module#CardHistoryPageModule', name: 'card-history', segment: 'cards/:spaceid/:itemid/history', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card-unread/card-unread.module#CardUnreadPageModule', name: 'card-unread', segment: 'cards/:spaceid/:itemid/unread', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card/card.module#CardPageModule', name: 'cards-item', segment: 'cards/:spaceid/:itemid', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'cards', segment: 'cards/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/files/files.module#FilesPageModule', name: 'files', segment: 'files/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/interlinks/interlinks.module#InterlinksPageModule', name: 'InterlinksPage', segment: 'interlinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/schedule/schedule.module#SchedulePageModule', name: 'schedules-item', segment: 'schedules/:spaceid/:itemid', priority: 'low', defaultHistory: ['schedules'] },
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
                        { loadChildren: '../pages/todos/todo/todo.module#TodoPageModule', name: 'todos-item', segment: 'todos/:spaceid/:itemid', priority: 'low', defaultHistory: ['todos'] },
                        { loadChildren: '../pages/todos/todos.module#TodosPageModule', name: 'todos', segment: 'todos/:spaceid', priority: 'high', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_routing_service__["a" /* RoutingService */],
                __WEBPACK_IMPORTED_MODULE_9__services_space_service__["a" /* SpaceService */],
                __WEBPACK_IMPORTED_MODULE_10__services_system_service__["a" /* SystemService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RoutingService = /** @class */ (function () {
    function RoutingService(storage) {
        this.storage = storage;
        this.currentRoute = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.cast = this.currentRoute.asObservable();
    }
    RoutingService.prototype.setCurrentRoute = function (route) {
        this.currentRoute.next(route);
        this.setCurrentRouteStroage(route);
    };
    RoutingService.prototype.clearCurrentRoute = function () {
        this.storage.set('routeStates', null);
    };
    RoutingService.prototype.setCurrentRouteStroage = function (route) {
        return __awaiter(this, void 0, void 0, function () {
            var routeStates, currentState, newPastState, newCurrentState, newRouteStates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('routeStates')];
                    case 1:
                        routeStates = _a.sent();
                        currentState = (routeStates === null) ? null : JSON.parse(routeStates).currentState;
                        newPastState = Object.assign({}, currentState);
                        newCurrentState = Object.assign({}, route);
                        newRouteStates = {
                            pastState: newPastState,
                            currentState: newCurrentState
                        };
                        console.log('-------setCurrentRouteStroage------');
                        console.log(newRouteStates);
                        this.storage.set('routeStates', JSON.stringify(newRouteStates));
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutingService.prototype.getCurrentRouteStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routeStates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('routeStates')];
                    case 1:
                        routeStates = _a.sent();
                        if (routeStates !== null) {
                            return [2 /*return*/, JSON.parse(routeStates).currentState];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutingService.prototype.getPastRouteState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routeStates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('routeStates')];
                    case 1:
                        routeStates = _a.sent();
                        if (routeStates !== null) {
                            return [2 /*return*/, JSON.parse(routeStates).pastState];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutingService.prototype.initPageRoute = function (name, spaceid, itemid, navCtrl) {
        var _this = this;
        this.getPastRouteState().then(function (state) {
            if (state.itemid === 'new') {
                _this.pop(name.split('-')[0], spaceid, navCtrl);
            }
            else {
                _this.setCurrentRoute({
                    name: name,
                    spaceid: spaceid,
                    itemid: itemid
                });
            }
        });
    };
    RoutingService.prototype.pop = function (name, spaceid, navCtrl) {
        this.setCurrentRoute({ name: name, spaceid: spaceid });
        navCtrl.setRoot(name, { spaceid: spaceid }, { animate: true, direction: 'back' });
    };
    RoutingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
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

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2TabBarComponent; });
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





var O2TabBarComponent = /** @class */ (function () {
    function O2TabBarComponent(navParams, navCtrl, sys, events, spaceService, route) {
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
    }
    O2TabBarComponent.prototype.openPage = function (tab) {
        if (tab.title === 'new') {
            var name_1 = (this.routing && this.routing.name ? this.routing.name : 'cards').split('-');
            var spaceid = this.routing.spaceid;
            var itemid = tab.title;
            this.navCtrl.push(name_1[0] + '-item', {
                spaceid: spaceid,
                itemid: itemid
            });
        }
        else {
            this.navCtrl.setRoot(tab.title, { spaceid: this.routing.spaceid });
            this.route.setCurrentRoute({ name: tab.title, spaceid: this.routing.spaceid });
        }
    };
    O2TabBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-tab-bar',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-tab-bar/o2-tab-bar.html"*/'<div class="tabNavbar">\n	<ion-grid no-padding>\n		<ion-row>\n			<ion-col no-padding *ngFor="let tab of tabs">\n				<button ion-button icon-only (click)="openPage(tab)">\n					<ion-icon [name]="tab.icon"></ion-icon>\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</div>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-tab-bar/o2-tab-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */]])
    ], O2TabBarComponent);
    return O2TabBarComponent;
}());

//# sourceMappingURL=o2-tab-bar.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2LeftSideMenuComponent; });
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
        this.route.getCurrentRouteStorage().then(function (state) {
            _this.route.setCurrentRoute({ name: state.name.split('-')[0], spaceid: space.spaceid });
            _this.nav.setRoot(state.name.split('-')[0], { spaceid: space.spaceid });
        });
    };
    O2LeftSideMenuComponent.prototype.openAccountSettings = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create('account-settings');
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.nav.setRoot("account-" + data.page, { type: data.type });
            }
        });
        profileModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], O2LeftSideMenuComponent.prototype, "nav", void 0);
    O2LeftSideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-left-side-menu',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-left-side-menu/o2-left-side-menu.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-title>Menu</ion-title>\n		<ion-buttons>\n			<button ion-button clear (click)="openAccountSettings()">Accounts</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<button menuClose ion-item *ngFor="let s of spaces" (click)="changeSpace(s)">\n			{{s.title}}\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-left-side-menu/o2-left-side-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */]])
    ], O2LeftSideMenuComponent);
    return O2LeftSideMenuComponent;
}());

//# sourceMappingURL=o2-left-side-menu.js.map

/***/ }),

/***/ 659:
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

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return O2TopSideNavComponent; });
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





var O2TopSideNavComponent = /** @class */ (function () {
    function O2TopSideNavComponent(sys, route, spaceService) {
        var _this = this;
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
            if (route !== null) {
                _this.routing = route;
            }
        });
    }
    O2TopSideNavComponent.prototype.openPage = function (tab) {
        if (tab.title === 'new') {
            var name_1 = (this.routing && this.routing.name ? this.routing.name : 'cards').split('-');
            var spaceid = this.routing.spaceid;
            var itemid = tab.title;
            this.nav.push(name_1[0] + '-item', {
                spaceid: spaceid,
                itemid: itemid
            });
        }
        else {
            this.nav.setRoot(tab.title, { spaceid: this.routing.spaceid });
            this.route.setCurrentRoute({ name: tab.title, spaceid: this.routing.spaceid });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], O2TopSideNavComponent.prototype, "nav", void 0);
    O2TopSideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'o2-top-side-nav',template:/*ion-inline-start:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-top-side-nav/o2-top-side-nav.html"*/'<ion-toolbar class="pwa-main-toolbar" color="primary">\n	<ion-grid no-padding>\n		<ion-row>\n			<ion-col no-padding class="nav-content-left">\n				로고\n			</ion-col>\n			<ion-col no-padding class="nav-content-center">\n				<ion-buttons>\n					<button ion-button clear *ngFor="let tab of tabs" (click)="openPage(tab)">{{tab.title}}</button>\n				</ion-buttons>\n			</ion-col>\n			<ion-col no-padding class="nav-content-right">\n\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-toolbar>'/*ion-inline-end:"/Users/aitch3/Workspace/O2Palm/test-pwa/src/components/o2-top-side-nav/o2-top-side-nav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_system_service__["a" /* SystemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_routing_service__["a" /* RoutingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_space_service__["a" /* SpaceService */]])
    ], O2TopSideNavComponent);
    return O2TopSideNavComponent;
}());

//# sourceMappingURL=o2-top-side-nav.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
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
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        for (var key in this.platformType) {
            this.platformType[key] = this.platform.is(key);
        }
        this.sys.setDevice(this.platformType);
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
        this.route.setCurrentRoute({ name: 'cards', spaceid: 'all' });
    };
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

/***/ })

},[345]);
//# sourceMappingURL=main.js.map