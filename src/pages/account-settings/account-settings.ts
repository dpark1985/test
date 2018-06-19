import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SystemService } from '../../services/system-service';


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

	constructor(
		public viewCtrl: ViewController,
		public sys: SystemService,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountSettingsPage');
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	reset(page: string, type?: string) {
		this.viewCtrl.dismiss({ page: page, type: type });
	}

}
