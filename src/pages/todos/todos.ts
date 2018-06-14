import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'todos',
	segment: 'todos/:spaceid',
	priority: 'high'
})
@Component({
	selector: 'page-todos',
	templateUrl: 'todos.html',
})
export class TodosPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodosPage');
	}

}
