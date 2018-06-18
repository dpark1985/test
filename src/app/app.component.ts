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
	// spaces: Array<{ title: string, spaceid: string }> = [];
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
	// private routing: any;

	tabs: any = [
		{ title: 'cards', icon: 'albums' },
		{ title: 'schedules', icon: 'calendar' },
		{ title: 'todos', icon: 'checkbox-outline' },
		{ title: 'new', icon: 'add-circle' },
	];

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

	initializeApp() {

		for (let key in this.platformType) {
			this.platformType[key] = this.platform.is(key);
		}
		this.sys.setDevice(this.platformType);

		// this.route.cast.subscribe((route) => {
		// 	this.routing = route;
		// });

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

		// this.initializeEvents();
	}

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


	ionChange(ev: any) {
		
	}

	// openPage(tab: any) {
	// 	this.spaceService.cast.first().subscribe((space: any) => {
	// 		if(tab.title === 'new') {
	// 			this.events.publish('newItem', {
	// 				name: this.routing && this.routing.name ? this.routing.name : 'cards',
	// 				spaceid: space && space.spaceid ? space.spaceid : 'all',
	// 				id: tab.title
	// 			});
	// 		} else {
	// 			this.events.publish('setRoot', { 
	// 				name: tab.title, 
	// 				spaceid: space && space.spaceid ? space.spaceid : 'all'
	// 			});
	// 		}
	// 	});
	// }
}
