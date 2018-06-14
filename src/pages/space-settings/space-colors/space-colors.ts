import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-color',
	segment: 'space-settings/:spaceid/color',
	defaultHistory: ['space-settings']
})
@Component({
	selector: 'page-space-colors',
	templateUrl: 'space-colors.html',
})
export class SpaceColorsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceColorsPage');
	}

}
