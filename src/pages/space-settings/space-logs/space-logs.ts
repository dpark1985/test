import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-logs',
	segment: 'space-settings/:spaceid/logs',
	defaultHistory: ['space-settings']
})
@Component({
	selector: 'page-space-logs',
	templateUrl: 'space-logs.html',
})
export class SpaceLogsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceLogsPage');
	}

}
