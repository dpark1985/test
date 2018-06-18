import { Component, Input } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';

import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'tab-bar',
	templateUrl: 'tab-bar.html'
})
export class TabBarComponent {

	@Input() page: string;

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

		this.spaceService.cast.subscribe((space: any) => {
			if (space !== null) {
				this.space = space;
			}
		});
	}

	ngOnInit() {
		if (this.navParams.data.spaceid) {
			this.space.spaceid = this.navParams.data.spaceid;
			this.route.setCurrentRoute({ name: this.page, spaceid: this.space.spaceid });
		}
	}

	openPage(tab: any) {
		if (tab.title === 'new') {
			this.events.publish('newItem', {
				name: this.routing && this.routing.name ? this.routing.name : 'cards',
				spaceid: this.space.spaceid,
				id: tab.title
			});
		} else {
			this.events.publish('setRoot', {
				name: tab.title,
				spaceid: this.space.spaceid,
			});
		}
	}
}
