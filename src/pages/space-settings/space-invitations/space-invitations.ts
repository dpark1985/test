import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'space-invitation',
	segment: 'space-settings/:spaceid/invitation',
	defaultHistory: ['space-settings']
})
@Component({
	selector: 'page-space-invitations',
	templateUrl: 'space-invitations.html',
})
export class SpaceInvitationsPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SpaceInvitationsPage');
	}

}
