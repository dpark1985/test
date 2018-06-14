import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'card-unread',
	segment: 'cards/:spaceid/:cardid/unread',
	defaultHistory: ['cards']
})
@Component({
	selector: 'page-card-unread',
	templateUrl: 'card-unread.html',
})
export class CardUnreadPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CardUnreadPage');
	}

}
