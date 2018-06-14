import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RoutingService } from '../services/routing-service';
import { SpaceService } from '../services/space-service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	rootParams: any;

	spaces: Array<{ title: string, spaceid: string }> = [];

	constructor(
		public events: Events,
		public route: RoutingService,
		public spaceService: SpaceService,
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen
	) {
		this.initializeApp();

		this.spaces.push({
			title: 'Space-all',
			spaceid: 'all'
		});

		for (let i = 0; i < 10; i++) {
			this.spaces.push({
				title: `Space-${i}`,
				spaceid: i.toString()
			});
		}
	}

	initializeApp() {
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

		this.initializeEvents();
	}

	initializeEvents() {
		this.events.subscribe('setRoot', (options: any) => {
			this.nav.setRoot(options.name, { spaceid: options.spaceid });
		});
	}

	changeSpace(space) {
		this.route.cast.first().subscribe((route: any) => {
			this.spaceService.setCurrentSpace(space);
			this.route.setCurrentRoute({ name: route.name, spaceid: space.spaceid });
			this.nav.setRoot(route.name, { spaceid: space.spaceid });
		});
	}



	ionChange(ev: any) {
		// console.log('----ion-change----');
		// console.log(ev);
		// console.log(ev._plt.is('cordova'));
		// console.log(ev._plt.is('android'));
		// console.log(ev._plt.is('ios'));
	}
}
