import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


@IonicPage({
	name: 'schedule',
	segment: 'schedules/:spaceid/:scheduleid',
	defaultHistory: ['schedules']
})
@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html',
})
export class SchedulePage {

	constructor(
		public route: RoutingService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.route.setCurrentRoute({ name: 'schedule', spaceid: this.navParams.get('spaceid'), scheduleid: this.navParams.get('scheduleid') });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulePage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'schedules', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('schedules', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}
}
