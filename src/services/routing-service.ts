import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable()
export class RoutingService {

	private currentRoute = new BehaviorSubject<any>(null);
	cast = this.currentRoute.asObservable();


	constructor(
		private storage: Storage
	) {

	}

	setCurrentRoute(route: any) {
		this.currentRoute.next(route);
		this.setCurrentRouteStroage(route);
	}

	clearCurrentRoute() {
		this.storage.set('routeStates', null);
	}

	async setCurrentRouteStroage(route: any) {
		const routeStates = await this.storage.get('routeStates');
		const currentState = (routeStates === null) ? null : JSON.parse(routeStates).currentState;
		const newPastState = Object.assign({}, currentState);
		const newCurrentState = Object.assign({}, route);
		const newRouteStates = {
			pastState: newPastState,
			currentState: newCurrentState
		};

		console.log('-------setCurrentRouteStroage------');
		console.log(newRouteStates);

		this.storage.set('routeStates', JSON.stringify(newRouteStates));
	}

	async getCurrentRouteStorage() {
		const routeStates = await this.storage.get('routeStates');
		if (routeStates !== null) {
			return JSON.parse(routeStates).currentState;
		} else {
			return null;
		}
	}

	async getPastRouteState() {
		const routeStates = await this.storage.get('routeStates');
		if (routeStates !== null) {
			return JSON.parse(routeStates).pastState;
		} else {
			return null;
		}
	}

	public initPageRoute(name: string, spaceid: string, itemid: string, navCtrl: any) {
		this.getPastRouteState().then((state: any) => {
			if (state.itemid === 'new') {
				this.pop(name.split('-')[0], spaceid, navCtrl);
			} else {
				this.setCurrentRoute({
					name: name,
					spaceid: spaceid,
					itemid: itemid
				});
			}
		});
	}

	public pop(name: string, spaceid: string, navCtrl: any) {
		this.setCurrentRoute({ name: name, spaceid: spaceid });
		navCtrl.setRoot(name, { spaceid: spaceid }, { animate: true, direction: 'back' });
	}

}
