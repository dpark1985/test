import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-members',
	segment: 'space-settings/:spaceid/members',
	defaultHistory: ['space-settings']
})
@Component({
	selector: 'page-space-members',
	templateUrl: 'space-members.html',
})
export class SpaceMembersPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceMembersPage');
	}

}
