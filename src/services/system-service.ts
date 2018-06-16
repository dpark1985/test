import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SystemServiceProvider {

	private system = new BehaviorSubject<any>({});
	cast = this.system.asObservable();

	constructor() {
		console.log('Hello SystemServiceProvider Provider');
	}

	setSystem(system: any) {
		this.system.next(system);
	}

}
