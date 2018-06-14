import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'files',
	segment: 'files/:spaceid',
	priority: 'high'
})
@Component({
	selector: 'page-files',
	templateUrl: 'files.html',
})
export class FilesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FilesPage');
	}

}
