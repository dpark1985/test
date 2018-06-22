import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


@IonicPage({
	name: 'card-unread',
	segment: 'cards/:spaceid/:itemid/unread',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card-unread',
	templateUrl: 'card-unread.html',
})
export class CardUnreadPage {

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardUnreadPage');
	}

	ionViewWillEnter() {
		this.route.initPageRoute('cards-unread', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
	}

}
