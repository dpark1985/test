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

	pages: Array<{ title: string, component: any, params: object }>;

	constructor(
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen
	) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Cards', component: 'cards', params: { spaceid: '123' } },
			{ title: 'Card Details123', component: 'card', params: { spaceid: '123', cardid: '123' } },
			{ title: 'Card Details456', component: 'card', params: { spaceid: '123', cardid: '456' } },
			{ title: 'Card Details789', component: 'card', params: { spaceid: '123', cardid: '789' } },

			{ title: 'Schedules', component: 'schedules', params: { spaceid: '123' } },
			{ title: 'Schedule Details123', component: 'schedule', params: { spaceid: '123', scheduleid: '123' } },
			{ title: 'Schedule Details456', component: 'schedule', params: { spaceid: '123', scheduleid: '456' } },
			{ title: 'Schedule Details789', component: 'schedule', params: { spaceid: '123', scheduleid: '789' } },

			{ title: 'Todos', component: 'todos', params: { spaceid: '123' } },
			{ title: 'Todo Details123', component: 'todo', params: { spaceid: '123', todoid: '123' } },
			{ title: 'Todo Details456', component: 'todo', params: { spaceid: '123', todoid: '456' } },
			{ title: 'Todo Details789', component: 'todo', params: { spaceid: '123', todoid: '789' } },
		];
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
	}

	openPage(page) {
		this.nav.push(page.component, page.params);
	}
}
