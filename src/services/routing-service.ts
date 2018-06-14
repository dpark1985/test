import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class RoutingService {

	private currentRoute = new BehaviorSubject<any>(null);
	cast = this.currentRoute.asObservable();


	constructor() {

	}

	setCurrentRoute(route: any) {
		this.currentRoute.next(route);
	}


}
