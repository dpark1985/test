import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


@IonicPage({
	name: 'card',
	segment: 'cards/:spaceid/:cardid',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card',
	templateUrl: 'card.html',
})
export class CardPage {

	constructor(
		public route: RoutingService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		console.log(this.navParams.get('spaceid'));
		console.log(this.navParams.get('cardid'));
		this.route.setCurrentRoute({ name: 'card', spaceid: this.navParams.get('spaceid'), cardid: this.navParams.get('cardid') });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardPage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'cards', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('cards', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}

}
