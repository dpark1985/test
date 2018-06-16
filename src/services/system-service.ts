import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SystemService {

	private system = new BehaviorSubject<any>({});
	cast = this.system.asObservable();

	private device = new BehaviorSubject<any>(null);
	deviceCast =  this.device.asObservable();
	deviceCast_: any;

	constructor() {
		console.log('Hello SystemServiceProvider Provider');
	}

	setSystem(system: any) {
		this.system.next(system);
	}


	setDevice(device: any) {
		this.device.next(device);
		this.deviceCast_ = device;
	}

}
