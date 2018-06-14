import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	rootParams: any;

	spaces: Array<{ title: string, spaceid: string }> = [];

	constructor(
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen
	) {
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


		for(let i=0; i<10; i++) {
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
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	initializePages() {
		this.rootPage = 'cards';
		this.rootParams = {spaceid: 'all'};


		console.log(this.platform.is('cordova'));
		console.log(this.platform.is('android'));
		console.log(this.platform.is('ios'));
	}

	changeSpace(space) {
		/**
		 * need to add spaceservice
		 */
		console.log(space);
	}

	ionChange(ev: any) {
		console.log('----ion-change----');
		console.log(ev);
		console.log(ev._plt.is('cordova'));
		console.log(ev._plt.is('android'));
		console.log(ev._plt.is('ios'));
	}
}
