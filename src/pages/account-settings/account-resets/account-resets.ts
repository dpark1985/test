import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';


@IonicPage({
	name: 'account-resets',
	segment: 'account-settings/resets/:type', //type === ['name' | 'password']
	defaultHistory: ['account-settings']
})
@Component({
	selector: 'page-account-resets',
	templateUrl: 'account-resets.html',
})
export class AccountResetsPage {

	constructor(
		public sys: SystemService,
		public route: RoutingService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.route.setCurrentRoute({ name: 'account-resets', type: this.navParams.get('type') });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountResetsPage');
	}

	pop() {
		this.route.getPastRouteState().then((state: any) => {
			this.route.setCurrentRoute({ name: state.name, spaceid: state.spaceid });
			this.navCtrl.setRoot(state.name, { spaceid: state.spaceid }, { animate: true, direction: 'back' });
		});
	}

}
