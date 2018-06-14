webpackJsonp([22],{

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-settings/account-email-verification/account-email-verification.module": [
		673,
		21
	],
	"../pages/account-settings/account-resets/account-resets.module": [
		674,
		20
	],
	"../pages/account-settings/account-settings.module": [
		675,
		19
	],
	"../pages/cards/card-history/card-history.module": [
		676,
		18
	],
	"../pages/cards/card-unread/card-unread.module": [
		677,
		17
	],
	"../pages/cards/card/card.module": [
		678,
		16
	],
	"../pages/cards/cards.module": [
		679,
		15
	],
	"../pages/files/files.module": [
		680,
		14
	],
	"../pages/interlinks/interlinks.module": [
		681,
		13
	],
	"../pages/schedules/schedule/schedule.module": [
		682,
		12
	],
	"../pages/schedules/schedules.module": [
		683,
		11
	],
	"../pages/settings/settings.module": [
		684,
		10
	],
	"../pages/settings/software-information/software-information.module": [
		685,
		9
	],
	"../pages/settings/terms-and-policies/terms-and-policies.module": [
		686,
		8
	],
	"../pages/space-settings/space-colors/space-colors.module": [
		687,
		7
	],
	"../pages/space-settings/space-invitations/space-invitations.module": [
		688,
		6
	],
	"../pages/space-settings/space-logs/space-logs.module": [
		689,
		5
	],
	"../pages/space-settings/space-members/space-members.module": [
		690,
		4
	],
	"../pages/space-settings/space-settings.module": [
		691,
		3
	],
	"../pages/space-settings/space-storage/space-storage.module": [
		692,
		2
	],
	"../pages/todos/todo/todo.module": [
		693,
		1
	],
	"../pages/todos/todos.module": [
		694,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(365);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(345);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_routing_service__ = __webpack_require__(339);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/account-settings/account-email-verification/account-email-verification.module#AccountEmailVerificationPageModule', name: 'account-email-verification', segment: 'account-settings/email-verification', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-resets/account-resets.module#AccountResetsPageModule', name: 'account-resets', segment: 'account-settings/resets/:type', priority: 'low', defaultHistory: ['account-settings'] },
                        { loadChildren: '../pages/account-settings/account-settings.module#AccountSettingsPageModule', name: 'account-settings', segment: 'account-settings', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/cards/card-history/card-history.module#CardHistoryPageModule', name: 'card-history', segment: 'cards/:spaceid/:cardid/history', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card-unread/card-unread.module#CardUnreadPageModule', name: 'card-unread', segment: 'cards/:spaceid/:cardid/unread', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/card/card.module#CardPageModule', name: 'card', segment: 'cards/:spaceid/:cardid', priority: 'low', defaultHistory: ['cards'] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'cards', segment: 'cards/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/files/files.module#FilesPageModule', name: 'files', segment: 'files/:spaceid', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/interlinks/interlinks.module#InterlinksPageModule', name: 'InterlinksPage', segment: 'interlinks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedules/schedule/schedule.module#SchedulePageModule', name: 'schedule', segment: 'schedules/:spaceid/:scheduleid', priority: 'low', defaultHistory: ['schedules'] },
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
                        { loadChildren: '../pages/todos/todo/todo.module#TodoPageModule', name: 'todo', segment: 'todos/:spaceid/:todoid', priority: 'low', defaultHistory: ['todos'] },
                        { loadChildren: '../pages/todos/todos.module#TodosPageModule', name: 'todos', segment: 'todos/:spaceid', priority: 'high', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_routing_service__["a" /* RoutingService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(338);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.spaces = [];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        // 	{ title: 'Cards', component: 'cards', params: { spaceid: '123' } },
        // 	{ title: 'Card Details123', component: 'card', params: { spaceid: '123', cardid: '123' } },
        // 	{ title: 'Card Details456', component: 'card', params: { spaceid: '123', cardid: '456' } },
        // 	{ title: 'Card Details789', component: 'card', params: { spaceid: '123', cardid: '789' } },
        // 	{ title: 'Schedules', component: 'schedules', params: { spaceid: '123' } },
        // 	{ title: 'Schedule Details123', component: 'schedule', params: { spaceid: '123', scheduleid: '123' } },
        // 	{ title: 'Schedule Details456', component: 'schedule', params: { spaceid: '123', scheduleid: '456' } },
        // 	{ title: 'Schedule Details789', component: 'schedule', params: { spaceid: '123', scheduleid: '789' } },
        // 	{ title: 'Todos', component: 'todos', params: { spaceid: '123' } },
        // 	{ title: 'Todo Details123', component: 'todo', params: { spaceid: '123', todoid: '123' } },
        // 	{ title: 'Todo Details456', component: 'todo', params: { spaceid: '123', todoid: '456' } },
        // 	{ title: 'Todo Details789', component: 'todo', params: { spaceid: '123', todoid: '789' } },
        // ];
        for (var i = 0; i < 10; i++) {
            this.spaces.push({
                title: "Space-" + i,
                spaceid: i.toString()
            });
        }
    }
    MyApp.prototype.initializeApp = function () {
        this.initializeNatives();
        this.initializePages();
    };
    MyApp.prototype.initializeNatives = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initializePages = function () {
        this.rootPage = 'cards';
        this.rootParams = { spaceid: 'all' };
        console.log(this.platform.is('cordova'));
        console.log(this.platform.is('android'));
        console.log(this.platform.is('ios'));
    };
    MyApp.prototype.changeSpace = function (space) {
        console.log(space);
    };
    MyApp.prototype.ionChange = function (ev) {
        console.log('----ion-change----');
        console.log(ev);
        console.log(ev._plt.is('cordova'));
        console.log(ev._plt.is('android'));
        console.log(ev._plt.is('ios'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/app/app.html"*/'<ion-split-pane (ionChange)="ionChange($event)">\n	<ion-menu [content]="content" id="leftSideMenu" type="overlay">\n		<ion-header>\n			<ion-toolbar>\n				<ion-title>Menu</ion-title>\n			</ion-toolbar>\n		</ion-header>\n	\n		<ion-content>\n			<ion-list>\n				<button menuClose ion-item *ngFor="let s of spaces" (click)="changeSpace(s)">\n					{{s.title}}\n				</button>\n			</ion-list>\n		</ion-content>\n	\n	</ion-menu>\n	\n	<ion-nav [root]="rootPage" [rootParams]="rootParams" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/o2palm/Workspace/002.Test/Snowpalm4/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map