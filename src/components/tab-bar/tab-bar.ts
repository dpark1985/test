import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';

@Component({
	selector: 'tab-bar',
	templateUrl: 'tab-bar.html'
})
export class TabBarComponent {

	tabs: any = [
		{ title: 'cards', icon: 'albums' },
		{ title: 'schedules', icon: 'calendar' },
		{ title: 'todos', icon: 'checkbox-outline' },
		{ title: 'news', icon: 'add-circle' },
	];

	private routing: any;

	constructor(
		public events: Events,
		public spaceService: SpaceService,
		public route: RoutingService
	) {
		console.log('Hello TabBarComponent Component');

		this.route.cast.subscribe((route) => {
			this.routing = route;
			console.log('--tabbar route---');
			console.log(this.routing);
		});
	}

	openPage(tab) {
		this.spaceService.cast.first().subscribe((space: any) => {
			if(this.routing.name !== tab.title) {
				this.events.publish('setRoot', { 
					name: tab.title, 
					spaceid: space && space.spaceid ? space.spaceid : 'all'
				});
			}
		});
	}
}
