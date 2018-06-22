import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';

@IonicPage({
	name: 'card-history',
	segment: 'cards/:spaceid/:itemid/history',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card-history',
	templateUrl: 'card-history.html',
})
export class CardHistoryPage {

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardHistoryPage');
	}

	ionViewWillEnter() {
		this.route.initPageRoute('cards-history', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
	}

}
