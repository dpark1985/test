import { Component, Input } from '@angular/core';

import { Nav, ModalController } from 'ionic-angular';
import { RoutingService } from '../../services/routing-service';
import { SpaceService } from '../../services/space-service';
import { SystemService } from '../../services/system-service';

@Component({
	selector: 'o2-left-side-menu',
	templateUrl: 'o2-left-side-menu.html'
})
export class O2LeftSideMenuComponent {
	@Input() nav: Nav;

	spaces: Array<{ title: string, spaceid: string }> = [];

	constructor(
		public modalCtrl: ModalController,
		public sys: SystemService,
		public route: RoutingService,
		public spaceService: SpaceService,
	) {
		console.log('Hello O2LeftSideMenuComponent Component');

		this.spaces.push({
			title: 'Space-all',
			spaceid: 'all'
		});

		for (let i = 0; i < 10; i++) {
			this.spaces.push({
				title: `Space-${i}`,
				spaceid: i.toString()
			});
		}
	}

	changeSpace(space) {
		this.route.getCurrentRouteStorage().then((state: any) => {
			this.route.setCurrentRoute({ name: state.name.split('-')[0], spaceid: space.spaceid });
			this.nav.setRoot(state.name.split('-')[0], { spaceid: space.spaceid });
		});
	}

	openAccountSettings() {
		let profileModal = this.modalCtrl.create('account-settings');
		profileModal.onDidDismiss((data: any) => {
			if (data) {
				this.nav.setRoot(`account-${data.page}`, { type: data.type });
			}
		});
		profileModal.present();
	}

}
