import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';

@IonicPage({
	name: 'account-email-verification',
	segment: 'account-settings/email-verification',
	defaultHistory: ['account-settings']
})
@Component({
	selector: 'page-account-email-verification',
	templateUrl: 'account-email-verification.html',
})
export class AccountEmailVerificationPage {

	constructor(
		public sys: SystemService,
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams
	) {
		this.route.setCurrentRoute({ name: 'account-email-verification' });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountEmailVerificationPage');
	}

	pop() {
		this.route.getPastRouteState().then((state: any) => {
			console.log(state);
			this.route.setCurrentRoute({ name: state.name, spaceid: state.spaceid });
			this.navCtrl.setRoot(state.name, { spaceid: state.spaceid }, { animate: true, direction: 'back' });
		});
	}

}
