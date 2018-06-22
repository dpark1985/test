import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';


@IonicPage({
	name: 'cards-item',
	segment: 'cards/:spaceid/:itemid',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card',
	templateUrl: 'card.html',
})
export class CardPage {

	constructor(
		public sys: SystemService,
		public platform: Platform,
		public route: RoutingService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardPage');

	}

	ionViewWillEnter() {
		this.route.initPageRoute('cards-item', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
	}


}
