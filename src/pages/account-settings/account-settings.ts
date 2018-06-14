import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'account-settings',
	segment: 'account-settings',
	priority: 'high'
})
@Component({
	selector: 'page-account-settings',
	templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountSettingsPage');
	}

}
