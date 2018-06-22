import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'o2-tab-bar',
	templateUrl: 'o2-tab-bar.html'
})
export class O2TabBarComponent {

	tabs: any = [
		{ title: 'cards', icon: 'albums' },
		{ title: 'schedules', icon: 'calendar' },
		{ title: 'todos', icon: 'checkbox-outline' },
		{ title: 'new', icon: 'add-circle' },
	];

	private routing: any;
	space: any = {
		title: 'All',
		spaceid: 'all'
	};

	constructor(
		public navParams: NavParams,
		public navCtrl: NavController,
		public sys: SystemService,
		public events: Events,
		public spaceService: SpaceService,
		public route: RoutingService
	) {
		console.log('Hello TabBarComponent Component');
		this.route.cast.subscribe((route) => {
			if(route !== null) {
				this.routing = route;
			}			
		});
	}

	openPage(tab: any) {
		if (tab.title === 'new') {
			let name = (this.routing && this.routing.name ? this.routing.name : 'cards').split('-');
			let spaceid = this.routing.spaceid;
			let itemid =  tab.title;

			this.navCtrl.push(name[0] + '-item', {
				spaceid: spaceid,
				itemid: itemid
			});
		} else {
			this.navCtrl.setRoot(tab.title, { spaceid: this.routing.spaceid })
			this.route.setCurrentRoute({ name: tab.title, spaceid: this.routing.spaceid });
		}
	}
}
