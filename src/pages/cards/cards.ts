import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';

@IonicPage({
	name: 'cards',
	segment: 'cards/:spaceid',
	priority: 'high'
})
@Component({
	selector: 'page-cards',
	templateUrl: 'cards.html',
})
export class CardsPage {

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {
		console.log(this.navParams.get('spaceid'));
		
		this.route.cast.subscribe((route) => {
			console.log('--current route---');
			console.log(route);
		})
		this.route.setCurrentRoute({name: 'cards', spaceid: this.navParams.get('spaceid')});

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardsPage');
	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

}
