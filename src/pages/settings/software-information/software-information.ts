import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'software-information',
	segment: 'software-information',
})
@Component({
	selector: 'page-software-information',
	templateUrl: 'software-information.html',
})
export class SoftwareInformationPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SoftwareInformationPage');
	}

}
