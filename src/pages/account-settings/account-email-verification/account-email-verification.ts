import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'account-email-verification',
	segment: 'account-settings/email-verification',
	defaultHistory: ['account-settings']
})
@Component({
	selector: 'page-account-email-verification',
	templateUrl: 'account-email-verification.html',
})
export class AccountEmailVerificationPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountEmailVerificationPage');
	}

}
