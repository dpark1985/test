import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'card-history',
	segment: 'cards/:spaceid/:cardid/history',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card-history',
	templateUrl: 'card-history.html',
})
export class CardHistoryPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardHistoryPage');
	}

}
