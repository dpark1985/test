import { Component, Input } from '@angular/core';
import { Nav, } from 'ionic-angular';

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
		public sys: SystemService,
		public route: RoutingService,
		public spaceService: SpaceService,
	) {
		console.log('Hello O2TopSideNavComponent Component');
		this.route.cast.subscribe((route: any) => {
			if (route !== null) {
				this.routing = route;
			}
		});
	}

	openPage(tab: any) {
		if (tab.title === 'new') {
			let name = (this.routing && this.routing.name ? this.routing.name : 'cards').split('-');
			let spaceid = this.routing.spaceid;
			let itemid =  tab.title;

			this.nav.push(name[0] + '-item', {
				spaceid: spaceid,
				itemid: itemid
			});
		} else {
			this.nav.setRoot(tab.title, { spaceid: this.routing.spaceid })
			this.route.setCurrentRoute({ name: tab.title, spaceid: this.routing.spaceid });
		}
	}

}
