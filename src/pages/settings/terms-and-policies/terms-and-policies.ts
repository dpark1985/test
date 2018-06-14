import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'terms-policies',
	segment: 'terms-policies/:type', //type === ['terms' | 'policies']
})
@Component({
	selector: 'page-terms-and-policies',
	templateUrl: 'terms-and-policies.html',
})
export class TermsAndPoliciesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TermsAndPoliciesPage');
	}

}
