import { Component, Input } from '@angular/core';
import { Nav, Events } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'o2-top-side-nav',
	templateUrl: 'o2-top-side-nav.html'
})
export class O2TopSideNavComponent {
	@Input() nav: Nav;

	private routing: any;
	tabs: any = [
		{ title: 'cards', icon: 'albums' },
		{ title: 'schedules', icon: 'calendar' },
		{ title: 'todos', icon: 'checkbox-outline' },
		{ title: 'new', icon: 'add-circle' },
	];

	constructor(
		public events: Events,
		public sys: SystemService,
		public route: RoutingService,
		public spaceService: SpaceService,
	) {
		console.log('Hello O2TopSideNavComponent Component');
		this.route.cast.subscribe((route) => {
			this.routing = route;
		});
		this.initializeEvents();
	}

	initializeEvents() {
		this.events.subscribe('setRoot', (options: any) => {
			this.route.setCurrentRoute({ name: options.name, spaceid: options.spaceid });
			this.nav.setRoot(options.name, { spaceid: options.spaceid });
		});

		this.events.subscribe('newItem', (options: any) => {
			const name = options.name.split('-');
			this.nav.push(name[0] + '-item', {
				spaceid: options.spaceid,
				id: options.id
			});
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
