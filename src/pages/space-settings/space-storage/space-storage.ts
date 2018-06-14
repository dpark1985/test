import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-storage',
	segment: 'space-settings/:spaceid/storage',
	defaultHistory: ['space-settings']
})
@Component({
	selector: 'page-space-storage',
	templateUrl: 'space-storage.html',
})
export class SpaceStoragePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceStoragePage');
	}

}
