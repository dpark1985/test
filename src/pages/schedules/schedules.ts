import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@IonicPage({
	name: 'schedules',
	segment: 'schedules/:spaceid',
	priority: 'high'
})
@Component({
	selector: 'page-schedules',
	templateUrl: 'schedules.html',
})
export class SchedulesPage {

	temp: any = [
		{ itemid: '1', title: '1' },
		{ itemid: '2', title: '2' },
		{ itemid: '3', title: '3' },
		{ itemid: '4', title: '4' },
		{ itemid: '5', title: '5' },
		{ itemid: '6', title: '6' },
		{ itemid: '7', title: '7' },
		{ itemid: '8', title: '8' },
		{ itemid: '9', title: '9' },
		{ itemid: '10', title: '10' },
	];

	space: any = {
		title: 'All',
		spaceid: 'all'
	};

	constructor(
		public sys: SystemService,
		public spaceService: SpaceService,
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {
		this.route.setCurrentRoute({ name: 'schedules', spaceid: this.navParams.get('spaceid') });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulesPage');

	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

	itemSelected(item) {
		this.navCtrl.push('schedules-item', { 
			spaceid: this.navParams.get('spaceid'),
			itemid: item.itemid 
		});
	}

}
