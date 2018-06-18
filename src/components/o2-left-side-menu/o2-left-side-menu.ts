import { Component, Input } from '@angular/core';

import { Nav } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'o2-left-side-menu',
	templateUrl: 'o2-left-side-menu.html'
})
export class O2LeftSideMenuComponent {
	@Input() nav: Nav;

	spaces: Array<{ title: string, spaceid: string }> = [];

	constructor(
		public sys: SystemService,
		public route: RoutingService,
		public spaceService: SpaceService,
	) {
		console.log('Hello O2LeftSideMenuComponent Component');
		
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

	changeSpace(space) {
		this.route.cast.first().subscribe((route: any) => {
			let name = '';
			if (route !== null && route.name) {
				name = route.name.split('-')[0];
			} else {
				name = 'cards'
			}
			this.spaceService.setCurrentSpace(space);
			this.route.setCurrentRoute({ name: name, spaceid: space.spaceid });
			this.nav.setRoot(name, { spaceid: space.spaceid });
		});
	}

}
