import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


@IonicPage({
	name: 'schedules-item',
	segment: 'schedules/:spaceid/:id',
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
		this.route.cast.first().subscribe((route: any) => {
			if(route === null && this.navParams.get('id') === 'new') {
				this.pop();
			} else {
				this.route.setCurrentRoute({ name: 'schedules-item', spaceid: this.navParams.get('spaceid'), id: this.navParams.get('id') });
			}
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulePage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'schedules', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('schedules', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}
}
