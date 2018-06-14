import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
	name: 'schedule',
	segment: 'schedules/:spaceid/:scheduleid',
	defaultHistory: ['schedules']
})
@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html',
})
export class SchedulePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SchedulePage');
	}

}
