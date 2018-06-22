import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';
import { SystemService } from '../../../services/system-service';

@IonicPage({
	name: 'todos-item',
	segment: 'todos/:spaceid/:itemid',
	defaultHistory: ['todos']
})
@Component({
	selector: 'page-todo',
	templateUrl: 'todo.html',
})
export class TodoPage {

	constructor(
		public sys: SystemService,
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoPage');
	}

	ionViewWillEnter() {
		this.route.initPageRoute('todos-item', this.navParams.get('spaceid'), this.navParams.get('itemid'), this.navCtrl);
	}


}
