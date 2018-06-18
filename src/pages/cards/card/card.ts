import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';


@IonicPage({
	name: 'cards-item',
	segment: 'cards/:spaceid/:id',
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
		this.route.cast.first().subscribe((route: any) => {
			if(route === null && this.navParams.get('id') === 'new') {
				this.pop();
			} else {
				this.route.setCurrentRoute({ name: 'cards-item', spaceid: this.navParams.get('spaceid'), id: this.navParams.get('id') });
			}
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardPage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'cards', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('cards', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}

}
