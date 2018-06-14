import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';


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

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {
		this.route.setCurrentRoute({name: 'todos', spaceid: this.navParams.get('spaceid')});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodosPage');
	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

}
