import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


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

	constructor(
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams
	) {
		this.route.setCurrentRoute({ name: 'todo', spaceid: this.navParams.get('spaceid'), todoid: this.navParams.get('cardid') });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoPage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'todos', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('todos', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}

}
