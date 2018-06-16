import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'tab-bar',
	templateUrl: 'tab-bar.html'
})
export class TabBarComponent {

	tabs: any = [
		{ title: 'cards', icon: 'albums' },
		{ title: 'schedules', icon: 'calendar' },
		{ title: 'todos', icon: 'checkbox-outline' },
		{ title: 'new', icon: 'add-circle' },
	];

	private routing: any;

	constructor(
		public sys: SystemService,
		public events: Events,
		public spaceService: SpaceService,
		public route: RoutingService
	) {
		console.log('Hello TabBarComponent Component');

		this.route.cast.subscribe((route) => {
			this.routing = route;
		});
	}

	openPage(tab: any) {
		this.spaceService.cast.first().subscribe((space: any) => {
			if(tab.title === 'new') {
				this.events.publish('newItem', {
					name: this.routing && this.routing.name ? this.routing.name : 'cards',
					spaceid: space && space.spaceid ? space.spaceid : 'all',
					id: tab.title
				});
			} else {
				this.events.publish('setRoot', { 
					name: tab.title, 
					spaceid: space && space.spaceid ? space.spaceid : 'all'
				});
			}
		});
	}
}
