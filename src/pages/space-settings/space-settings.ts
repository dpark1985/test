import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-settings',
	segment: 'space-settings/:spaceid',
	priority: 'high'
})
@Component({
	selector: 'page-space-settings',
	templateUrl: 'space-settings.html',
})
export class SpaceSettingsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceSettingsPage');
	}

}
