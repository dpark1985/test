import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

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

	temp: any = [
		{ id: '1', title: '1' },
		{ id: '2', title: '2' },
		{ id: '3', title: '3' },
		{ id: '4', title: '4' },
		{ id: '5', title: '5' },
		{ id: '6', title: '6' },
		{ id: '7', title: '7' },
		{ id: '8', title: '8' },
		{ id: '9', title: '9' },
		{ id: '10', title: '10' },
	];

	constructor(
		public sys: SystemService,
		public spaceService: SpaceService,
		public route: RoutingService,
		public navCtrl: NavController, 
		public navParams: NavParams,
		public menuCtrl: MenuController
	) {

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TodosPage');
	}

	toggleMenu() {
		this.menuCtrl.toggle('leftSideMenu');
	}

	itemSelected(item) {
		this.spaceService.cast.first().subscribe((space: any) => {
			this.navCtrl.push('todos-item', { 
				spaceid: space && space.spaceid ? space.spaceid : 'all',
				id: item.id 
			});
		});
	}

}
