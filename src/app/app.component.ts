import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RoutingService } from '../services/routing-service';
import { SpaceService } from '../services/space-service';
import { SystemService } from '../services/system-service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	rootParams: any;

	platformType: object = {
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

	constructor(
		public sys: SystemService,
		public events: Events,
		public route: RoutingService,
		public spaceService: SpaceService,
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen
	) {
		this.initializeApp();
	}

	initializeApp() {

		for (let key in this.platformType) {
			this.platformType[key] = this.platform.is(key);
		}
		this.sys.setDevice(this.platformType);
		this.initializeNatives();
		this.initializePages();
	}

	initializeNatives() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	initializePages() {
		this.rootPage = 'cards';
		this.rootParams = { spaceid: 'all' };
		this.route.setCurrentRoute({ name: 'cards', spaceid: 'all' });
	}

	ionChange(ev: any) {

	}
}
