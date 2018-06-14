import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'account-resets',
	segment: 'account-settings/resets/:type', //type === ['name' | 'password']
	defaultHistory: ['account-settings']
})
@Component({
	selector: 'page-account-resets',
	templateUrl: 'account-resets.html',
})
export class AccountResetsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountResetsPage');
	}

}
