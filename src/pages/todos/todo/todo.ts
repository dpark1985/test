import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoutingService } from '../../../services/routing-service';


@IonicPage({
	name: 'todos-item',
	segment: 'todos/:spaceid/:id',
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
		this.route.cast.first().subscribe((route: any) => {
			if(route === null && this.navParams.get('id') === 'new') {
				this.pop();
			} else {
				this.route.setCurrentRoute({ name: 'todos-item', spaceid: this.navParams.get('spaceid'), id: this.navParams.get('id') });
			}
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodoPage');
	}

	pop() {
		this.route.setCurrentRoute({ name: 'todos', spaceid: this.navParams.get('spaceid') });
		this.navCtrl.setRoot('todos', { spaceid: this.navParams.get('spaceid') }, { animate: true, direction: 'back' });
	}

}
