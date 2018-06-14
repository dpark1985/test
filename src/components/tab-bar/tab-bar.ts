import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';

@Component({
	selector: 'tab-bar',
	templateUrl: 'tab-bar.html'
})
export class TabBarComponent {

	tabs: any = [
		{ title: 'Cards', icon: 'albums' },
		{ title: 'Schedules', icon: 'calendar' },
		{ title: 'Todos', icon: 'checkbox-outline' },
		{ title: 'News', icon: 'add-circle' },
	]

	constructor(
		public route: RoutingService,
		public platform: Platform
	) {
		console.log('Hello TabBarComponent Component');

		// this.tabs.push()
		// console.log(this.platform.getQueryParam);

		this.route.cast.subscribe((route) => {
			console.log('--current route---');
			console.log(route);
		})
	}

}
