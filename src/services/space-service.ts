import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SpaceService {

	private currentSpace = new BehaviorSubject<any>(null);
	cast = this.currentSpace.asObservable();

	constructor() { }

	setCurrentSpace(space: any) {
		this.currentSpace.next(space);
	}

}
