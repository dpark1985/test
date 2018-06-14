import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'todo',
	segment: 'todos/:spaceid/:todoid',
	defaultHistory: ['todos']
})
@Component({
	selector: 'page-todo',
	templateUrl: 'todo.html',
})
export class TodoPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoPage');
	}

}
