import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform } from 'ionic-angular';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';
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

	temp: any = [
		{ itemid: '1', title: '1' },
		{ itemid: '2', title: '2' },
		{ itemid: '3', title: '3' },
		{ itemid: '4', title: '4' },
		{ itemid: '5', title: '5' },
		{ itemid: '6', title: '6' },
		{ itemid: '7', title: '7' },
		{ itemid: '8', title: '8' },
		{ itemid: '9', title: '9' },
		{ itemid: '10', title: '10' },
	];

	space: any = {
		title: 'All',
		spaceid: 'all'
	};

	constructor(
		public route: RoutingService,
		public sys: SystemService,
		public platform: Platform,
		public spaceService: SpaceService,
		public navCtrl: NavController,
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardsPage');

	}

	ionViewWillEnter() {
		this.route.setCurrentRoute({ name: 'cards', spaceid: this.navParams.get('spaceid') });
	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

	itemSelected(item) {
		this.navCtrl.push('cards-item', {
			spaceid: this.navParams.get('spaceid'),
			itemid: item.itemid
		});
	}


}
