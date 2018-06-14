import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';

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

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {
		this.route.setCurrentRoute({name: 'schedules', spaceid: this.navParams.get('spaceid')});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulesPage');
	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

}
