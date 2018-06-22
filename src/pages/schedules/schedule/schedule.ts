import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';


@IonicPage({
	name: 'schedules-item',
	segment: 'schedules/:spaceid/:itemid',
	defaultHistory: ['schedules']
})
@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html',
})
export class SchedulePage {

	constructor(
		public sys: SystemService,
		public route: RoutingService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulePage');
	}

	ionViewWillEnter() {
		this.route.initPageRoute('schedules-item', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
	}
}
